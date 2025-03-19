import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    { label: 'DSS Home', href: '/dss' },
    { label: 'Dashboard', href: '/dss/dashboard' },
    { label: 'Reports', href: '/dss/reports' },
  ];

  return (
    <nav className="dss-navbar">
      <ul>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
