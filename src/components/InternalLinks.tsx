
import { Link } from "react-router-dom";

const InternalLinks = () => {
  return (
    <div className="mt-16 border-t border-gray-200 pt-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Explore More</h2>
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            to="/privacy" 
            className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="font-medium text-gray-900">Privacy Policy</h3>
            <p className="text-sm text-gray-600 mt-1">
              Learn how we protect your personal information and data
            </p>
          </Link>
          <div className="block p-4 rounded-lg bg-gray-50">
            <h3 className="font-medium text-gray-900">Coming Soon</h3>
            <p className="text-sm text-gray-600 mt-1">
              More resources and pages will be available soon
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default InternalLinks;
