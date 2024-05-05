"use client";

import OnboardingUI from "@/components/onboarding";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { SidebarNav } from "./components/SidebarNav";

const sidebarNavItems = [
  {
    title: "DB Connection",
    href: "/examples/forms",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
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
              {clickedSubmitCount > 3 && <OnboardingUI />}
              <div>
                <h3 className="text-lg font-medium">DB Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Set up your DB connection to our product here.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Account</h3>
                <p className="text-sm text-muted-foreground">
                  Set up your DB connection to our product here.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Appearance</h3>
                <p className="text-sm text-muted-foreground">
                  Set up your DB connection to our product here.
                </p>
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
