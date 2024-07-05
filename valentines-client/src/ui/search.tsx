import React, { useState, ChangeEvent } from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface User {
  name: string;
  id: string; // Unique ID for navigation
}

const Search: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<User[]>([]);

  // Dummy data for users
  const users: User[] = [
    { name: "John Doe", id: "1" },
    { name: "Jane Smith", id: "2" },
    { name: "Alice Johnson", id: "3" },
    { name: "Bob Brown", id: "4" },
    { name: "Lewis Nganga", id: "5" },
    { name: "David Johnson", id: "6" },
    { name: "Michael Johnson", id: "7" },
    { name: "Sarah Johnson", id: "8" },
    { name: "Emily Johnson", id: "9" },
    { name: "Michael Smith", id: "10" },
    { name: "Sarah Smith", id: "11" },
    { name: "Emily Smith", id: "12" },
    { name: "Michael Johnson", id: "13" },
    { name: "Sarah Johnson", id: "14" },
    { name: "Emily Johnson", id: "15" },
    { name: "prince mungai", id: "16" },
    { name: "princess kagiso", id: "17" },
    { name: "John Wick", id: "18" },
    { name: "Amanda Johnson", id: "19" },
    { name: "Robert Smith", id: "20" },
    { name: "Laura Brown", id: "21" },
    { name: "Kevin Davis", id: "22" },
    { name: "Julia Thompson", id: "23" },
    { name: "Daniel Lee", id: "24" },
    { name: "Emma Wilson", id: "25" },
    { name: "Oliver Harris", id: "26" },
    { name: "Sophia Martinez", id: "27" },
    { name: "Liam Taylor", id: "28" },
    { name: "Isabella Clark", id: "29" },
    { name: "Ethan Lewis", id: "30" },
    { name: "Ava Rodriguez", id: "31" },
    { name: "Mason Walker", id: "32" },
    { name: "Amelia White", id: "33" },
    { name: "Logan Green", id: "34" },
    { name: "Olivia King", id: "35" },
    { name: "James Scott", id: "36" },
    { name: "Charlotte Hill", id: "37" },
    { name: "Benjamin Allen", id: "38" },
    { name: "Emily Young", id: "39" },
    { name: "Lucas Moore", id: "40" },
    { name: "Madison Hall", id: "41" },
    { name: "Alexander Brown", id: "42" },
    { name: "Grace Adams", id: "43" },
    { name: "Jack Stewart", id: "44" },
    { name: "Chloe Parker", id: "45" },
    { name: "Ryan Robinson", id: "46" },
    { name: "Zoe Watson", id: "47" },
    { name: "Jackson Carter", id: "48" },
    { name: "Lily Turner", id: "49" },
    { name: "Luke Cooper", id: "50" },
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    const filteredResults = users.filter((user) =>
      user.name.toLowerCase().includes(newQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  const handleResultClick = () => {
    setShowModal(false); // Close the modal when a result is clicked
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-auto items-start justify-center bg-black/50 backdrop-filter backdrop-blur-md bg-opacity-50">
      <div className="relative w-full max-w-3xl h-auto p-6 bg-transparent rounded-lg pt-20">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4"
        >
          <FaTimesCircle className="text-white scale-125" />
        </button>

        {/* Search Input */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Find..."
            value={query}
            onChange={handleInputChange}
            className="w-full p-4 pl-10 pr-12 text-gray-500 bg-white rounded-md focus:outline-none shadow-md focus:shadow-lg"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Search Results */}
        {query && (
          <div className="grid grid-cols-1 rounded-md overflow-hidden h-auto">
            <div className="max-h-96 overflow-y-auto">
              {results.map((result) => (
                <Link
                  key={result.id}
                  to={`/user/${result.id}`}
                  onClick={handleResultClick}
                  className="p-4 bg-orange-500 text-black hover:bg-white/50 hover:cursor-pointer block"
                >
                  {result.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
