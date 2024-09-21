"use client";

export function Header() {
  return (
    <header className="bg-[#340100] p-8 sticky top-0">
      <nav className="flex flex-row gap-3">
        <ul className="flex flex-row gap-16">
          <li>MOVIES</li>
          <li>ACTORS</li>
          <li>RATINGS</li>
          <li>
            <button>BROWSE</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
