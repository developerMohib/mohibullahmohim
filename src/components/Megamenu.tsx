import { useState } from 'react';

const SolutionsMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const solutions = [
    {
      category: 'Development',
      items: [
        { name: 'Web Apps', href: '/solutions/web-apps' },
        { name: 'Mobile Apps', href: '/solutions/mobile-apps' },
        { name: 'API Development', href: '/solutions/api-development' },
      ]
    },
    {
      category: 'E-Commerce',
      items: [
        { name: 'Online Stores', href: '/solutions/ecommerce' },
        { name: 'Payment Systems', href: '/solutions/payments' },
        { name: 'Inventory Management', href: '/solutions/inventory' },
      ]
    },
    {
      category: 'Services',
      items: [
        { name: 'Consulting', href: '/solutions/consulting' },
        { name: 'Maintenance', href: '/solutions/maintenance' },
        { name: 'Code Review', href: '/solutions/code-review' },
      ]
    }
  ];

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-mmBlack hover:text-mmBlack/70 px-4 py-2 rounded-md">
        Solutions
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 w-96 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50"
          // Add mouse events to the menu itself to prevent immediate hiding
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="grid grid-cols-3 gap-4">
            {solutions?.map((section) => (
              <div key={section.category}>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {section.category}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 text-sm py-1 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionsMegaMenu;