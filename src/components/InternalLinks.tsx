
import { Link } from 'react-router-dom';

const InternalLinks = () => {
  const internalLinks = [
    {
      to: "/privacy",
      text: "隱私權政策",
      description: "了解我們如何保護您的個人資料"
    }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">相關頁面</h3>
      <div className="grid gap-3">
        {internalLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="block p-3 bg-white rounded border hover:shadow-md transition-shadow"
          >
            <span className="font-medium text-blue-600">{link.text}</span>
            <p className="text-sm text-gray-600 mt-1">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InternalLinks;
