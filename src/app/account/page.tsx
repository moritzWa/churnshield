"use client";

import OnboardingUI from "@/components/onboarding";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { SidebarNav } from "@/components/sidebarnav";
import '../dashboard/onboarding.css';

const sidebarNavItems = [
  {
    title: "DB Connection",
    href: "/examples/forms",
  },
  {
    title: "Account",
    href: "/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
];

export default function DashboardPage() {
  const steps = [
    {
      highlightComponent: <h3 className="text-lg font-medium">Test</h3>,
      description: "This is where you can set up your database connection.",
    },
  ];

  const [clickedSubmitCount, setclickedSubmitCount] = useState(0);

  return (
    <div className="w-full h-fulls">
      <div className="bg-white shadow-md">
        <div className="mx-auto px-36">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-4 flex items-center">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                  Company Name
                </button>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <a
                  href="/dashboard"
                  className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                >
                  Dashboard
                </a>
                <a
                  href="/integrations"
                  className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  Integrations
                </a>
                <a
                  href="/settings"
                  className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-900 border-indigo-500 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                  aria-current="page"
                >
                  Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden space-y-6 pt-20 px-36 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <div className="space-y-6">
              {clickedSubmitCount > 3 &&
              
              <form method="POST" action="/filledvalues">
              <div className="onboarding-ui">
                <h1 className="onboarding-title">Hey Margarita, it looks like you are trying to connect your NameCheap DNS Server.</h1>
                <ul className="onboarding-list">
                  <li>You forgot to input the TTL value. The correct value is 60.</li>
                  <li>You selected the Wrong Type: The correct Type is CNAME.</li>
                </ul>
                <button type="submit" className="onboarding-button">Fill out correct values</button>
                <button className="onboarding-button">Ask Follow Up</button>
              </div>
            </form>
}
              <div className="flex items-center">
  <div>
    <h3 className="text-lg font-medium">Github username</h3>
    <p className="text-sm text-muted-foreground">
      Set up your TTL Value here. This is a numerical value used for data validity and expiration
    </p>
  </div>
  <input type="text" className="ml-10 border-2 border-gray-300 w-full md:w-1/2" />
</div>
<div className="flex items-center">
  <div>
    <h3 className="text-lg font-medium">Github API</h3>
    <p className="text-sm text-muted-foreground">
    Set up your TTL Value here. This is a numerical value used for data validity and expiration
    </p>
  </div>
  <select className="ml-10 border-2 border-gray-500 w-full md:w-1/2 text-center text-gray-300">
  <option value="CNAME">CNAME</option>
  <option value="Option1">AAA</option>
  <option value="Option2">SRV</option>
  <option value="Option3">TXT</option>
</select>
</div>
<div className="flex items-center">
  <div>
    <h3 className="text-lg font-medium">Username</h3>
    <p className="text-sm text-muted-foreground">
    Set up your TTL Value here. This is a numerical value used for data validity and expiration
    </p>
  </div>
  <input type="text" className="ml-10 border-2 border-gray-300 w-full md:w-1/2" />
</div>
              <Separator />
              <Button
                onClick={() => {
                  setclickedSubmitCount((prev) => prev + 1);
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
