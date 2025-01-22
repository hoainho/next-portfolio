import Link from "next/link";

const Breadcrumb = ({
  items,
}: {
  items: { label: string; href: string }[];
}) => {
  return (
    <nav
      className="flex items-center text-gray-700 text-sm mb-16"
      aria-label="Breadcrumb"
    >
      <ol className="flex list-none flex-wrap">
        {items?.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <Link
              href={item.href}
              className={`without-style text-fg-muted hover:text-[#79c0ff] ${
                index === items.length - 1 ? "text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
