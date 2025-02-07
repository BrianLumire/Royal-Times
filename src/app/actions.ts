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
export async function storePsvBadgeImage(formData: FormData) {
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

export async function storeVerificationInfo(formData: FormData) {
  const user_id = formData.get("user_id");

  // Define images to be processed
  const images = [
    { key: "driver_license_front", filename: "driver_license_front_image.jpg" },
    { key: "driver_license_back", filename: "driver_license_back_image.jpg" },
    { key: "proof_of_insurance", filename: "insurance_image.jpg" },
    { key: "license_plate", filename: "license_plate_image.jpg" },
    { key: "proof_of_ownership", filename: "proof_of_ownership_image.jpg" },
  ];

  // Resize and store images
  const resizedImages = await Promise.all(
    images.map(async (image) => {
      const file = formData.get(image.key) as File;
      return file
        ? {
            filename: image.filename,
            data: await resizeImage(file, image.filename),
          }
        : null;
    })
  );

  const supabase = await createClient();

  // Upload images to Supabase
  for (const image of resizedImages) {
    if (image) {
      const { error } = await supabase.storage
        .from("drivers")
        .upload(`${user_id}/${image.filename}`, image.data, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) {
        console.log(error);
        return { error: "An error occurred while uploading" };
      }
    }
  }
  return { success: true };
}

export async function storeVehicleImages(formData: FormData) {
  const user_id = formData.get("user_id");

  // Define images to be processed
  const images = [
    { key: "vehicle_front_view", filename: "vehicle_front_view_image.jpg" },
    { key: "vehicle_back_view", filename: "vehicle_back_view_image.jpg" },
    { key: "vehicle_left_side_view", filename: "vehicle_left_side_view_image.jpg" },
    { key: "vehicle_right_side_view", filename: "vehicle_right_side_view_image.jpg" },
  ];

  // Resize and store images
  const resizedImages = await Promise.all(
    images.map(async (image) => {
      const file = formData.get(image.key) as File;
      return file
        ? {
            filename: image.filename,
            data: await resizeImage(file, image.filename),
          }
        : null;
    })
  );

  const supabase = await createClient();

  // Upload images to Supabase
  for (const image of resizedImages) {
    if (image) {
      const { error } = await supabase.storage
        .from("drivers")
        .upload(`${user_id}/${image.filename}`, image.data, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) {
        console.log(error);
        return { error: "An error occurred while uploading" };
      }
    }
  }

  return { success: true };
}
