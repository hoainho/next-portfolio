import Link from 'next/link';

const Breadcrumb = ({ items }: { items: { label: string; href: string }[] }) => {
  return (
    <nav className="flex items-center text-gray-700 text-sm mt-4 mb-4" aria-label="Breadcrumb">
      <ol className="list-reset flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <Link href={item.href} className="!text-[#7f848a] hover:!text-indigo-800">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;