import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySessionToken, ADMIN_COOKIE_NAME } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import LogoutButton from "@/components/LogoutButton";

export const dynamic = "force-dynamic";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string | null;
  message: string;
  createdAt: Date;
}

interface StatProps {
  label: string;
  value: number;
}

export default async function AdminDashboard(): Promise<JSX.Element> {
  const token: string | undefined = (await cookies()).get(ADMIN_COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    redirect("/admin/login");
  }

  const submissions: ContactSubmission[] = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  const total = submissions.length;
  const last7Days = submissions.filter(
    (s) => Date.now() - s.createdAt.getTime() < 7 * 24 * 60 * 60 * 1000
  ).length;
  const uniqueCompanies = new Set(
    submissions.filter((s) => s.company).map((s) => s.company)
  ).size;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <span className="text-accent text-xs tracking-[0.2em] uppercase">
            Admin
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-700 mt-2">
            Contact submissions
          </h1>
        </div>
        <LogoutButton />
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mt-10">
        <Stat label="Total submissions" value={total} />
        <Stat label="Last 7 days" value={last7Days} />
        <Stat label="Unique companies" value={uniqueCompanies} />
      </div>

      <div className="mt-12 border border-line rounded-2xl overflow-hidden bg-surface">
        {submissions.length === 0 ? (
          <p className="text-muted text-sm p-8 text-center">
            No submissions yet. They'll appear here as soon as someone uses
            the contact form.
          </p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left text-muted">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Company</th>
                <th className="px-5 py-3 font-medium">Message</th>
                <th className="px-5 py-3 font-medium whitespace-nowrap">Received</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s) => (
                <tr key={s.id} className="border-b border-line last:border-0">
                  <td className="px-5 py-4 align-top">{s.name}</td>
                  <td className="px-5 py-4 align-top text-muted">{s.email}</td>
                  <td className="px-5 py-4 align-top text-muted">{s.company || "—"}</td>
                  <td className="px-5 py-4 align-top max-w-xs text-muted">{s.message}</td>
                  <td className="px-5 py-4 align-top text-muted whitespace-nowrap">
                    {s.createdAt.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="border border-line rounded-2xl p-6 bg-surface">
      <p className="font-display text-3xl text-accent">{value}</p>
      <p className="text-muted text-sm mt-1">{label}</p>
    </div>
  );
}