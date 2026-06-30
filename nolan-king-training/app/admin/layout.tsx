import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AdminShell from "@/components/AdminShell";
import { isAuthenticated } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin | Nolan King Training",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAuthenticated())) redirect("/admin/login");
  return <AdminShell>{children}</AdminShell>;
}
