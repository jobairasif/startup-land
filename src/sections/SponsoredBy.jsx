import React from "react";

export default function SponsoredBy() {
  return (
    <section className="px-4">
      <div className="container mx-auto flex gap-10 mt-7">
        <p className="text-xl text-[#566272] opacity-60">Sponsored By:</p>
        <div className="flex gap-8">
          <img src="/images/paypal.svg" alt="" />
          <img src="/images/google.svg" alt="" />
          <img src="/images/dropbox.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
