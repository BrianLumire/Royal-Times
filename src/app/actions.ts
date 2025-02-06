"use server";
import { createClient } from "../utils/supabase/server";
import { encodedRedirect } from "../utils/utils";
import { redirect } from "next/navigation";
import sharp from "sharp";

async function resizeImage(file: File, name: string): Promise<File> {
  try {
    // Convert File to Buffer
    const buffer = await file.arrayBuffer();
    const imageBuffer = Buffer.from(buffer);

    let quality = 80;
    let compressedBuffer = await sharp(imageBuffer)
      .jpeg({ quality }) // Convert to JPG
      .toBuffer();

    // Reduce quality until file size is => 10MB
    while (compressedBuffer.length > 10 * 1024 * 1024 && quality > 10) {
      quality -= 10;
      compressedBuffer = await sharp(imageBuffer).jpeg({ quality }).toBuffer();
    }

    // Return image
    const newImage = new File([compressedBuffer], name, {
      type: "image/jpeg",
    });

    return newImage;
  } catch (error) {
    console.error("Error processing image:", error);
    throw new Error("Failed to process image");
  }
}

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/supplier");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/");
};

// resize and upload national ids to drivers bucket
export async function storeIdImages(formData: FormData) {
  const user_id = formData.get("user_id");
  const back_id_image = await resizeImage(
    formData.get("back_id_image") as File,
    "back_id_image.jpg"
  );
  const front_id_image = await resizeImage(
    formData.get("front_id_image") as File,
    "front_id_image.jpg"
  );

  const supabase = await createClient();

  const { error: back_image_error } = await supabase.storage
    .from("drivers")
    .upload(`${user_id}/back_id_image.jpg`, back_id_image, {
      cacheControl: "3600",
      upsert: true,
    });

  const { error: front_image_error } = await supabase.storage
    .from("drivers")
    .upload(`${user_id}/front_id_image.jpg`, front_id_image, {
      cacheControl: "3600",
      upsert: true,
    });

  if (front_image_error || back_image_error) {
    //check vercel logs in case of errors
    console.log(front_image_error, back_image_error);
    return { error: "An error occured while uploading" };
  } else {
    return { success: true };
  }
}


// resize and upload psv badge to drivers bucket
export async function storepsvBadgeImage(formData: FormData) {
  const user_id = formData.get("user_id");
  const psv_badge_image = await resizeImage(
    formData.get("psv_badge_image") as File,
    "psv_badge_image.jpg"
  );

  const supabase = await createClient();

  const { error: psv_image_error } = await supabase.storage
    .from("drivers")
    .upload(`${user_id}/psv_badge_image.jpg`, psv_badge_image, {
      cacheControl: "3600",
      upsert: true,
    });

  if (psv_image_error) {
    //check vercel logs in case of errors
    console.log(psv_image_error);
    return { error: "An error occured while uploading" };
  } else {
    return { success: true };
  }
}