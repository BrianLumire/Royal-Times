"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import React from "react";

const Page = () => {
  const supabase = createClient();

  async function get_online_drivers() {
    const { data, error } = await supabase.rpc("get_online_drivers", {
      page_number: 1,
      page_size: 5,
    });
    if (error) console.error(error);
    else console.log(data);
  }

  return (
    <div>
      <Button onClick={get_online_drivers}>Hello Drivers</Button>
    </div>
  );
};

export default Page;
