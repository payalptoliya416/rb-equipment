
import UserFooter from "@/components/common/UserFooter";
import UserHeader from "@/components/common/UserHeader";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
     <div className="min-h-screen flex flex-col">
      <UserHeader />
      <main className="flex-1">
        {children}
      </main>
      <UserFooter />
    </div>
  );
}
