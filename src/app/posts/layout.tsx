import Search from "@/app/components/Search";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="px-8 py-4 sticky top-0 z-50 flex">
        <Search placeholder="Clementine, Ervin, ..." />
      </div>
      {children}
    </main>
  );
}
