import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  TrendingUp,
  AlertTriangle,
  List,
  ChevronDown,
  Globe,
  Building,
  DollarSign,
  BarChart2,
  Activity,
  Tag,
  Info,
  ShoppingBag,
  Zap,
  Star,
  Users,
  Eye,
  Command,
  Cpu,
  Database,
  Server,
  ArrowUpRight,
  PieChart,
  BrainCircuit,
} from "lucide-react";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Google Sheets API endpoint using sheet ID and tab ID
        const sheetId = "1098MT3Wgfzia7dKjxAyr7jxgH5PpdAt3AOaoII2J9xw";
        const tabId = "794818920";
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${tabId}`;

        const response = await fetch(url);
        const text = await response.text();

        // Parse the JSON-like response from Google Sheets
        const jsonData = JSON.parse(text.substring(47).slice(0, -2));

        // Extract column headers and company data
        const headers = jsonData.table.cols.map((col) => col.label);
        const rows = jsonData.table.rows.map((row) => {
          const company = {};
          row.c.forEach((cell, i) => {
            if (headers[i]) {
              company[headers[i]] = cell ? cell.v : "";
            }
          });
          return company;
        });

        setCompanies(rows);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  // Filter companies based on search term and filters
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company["Company Name"]
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      company["Industry"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company["Headquarters"]?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin-slow"></div>
          <div className="absolute top-4 left-4 w-16 h-16 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin-reverse"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="bg-red-900/20 p-8 rounded-xl border border-red-700 backdrop-blur-md">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-400 text-xl font-mono text-center">{error}</p>
          <button className="mt-6 mx-auto block bg-red-700/30 hover:bg-red-700/50 text-red-300 font-medium px-4 py-2 rounded-lg transition-all">
            Retry
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-black">
      {/* Ambient background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-900 rounded-full filter blur-[120px] opacity-5"></div>
      </div>

      {/* Hero Section - Asymmetric Design */}
      <div className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-12">
            <div className="max-w-3xl text-center">
              <div className="inline-flex items-center bg-cyan-900/20 border border-cyan-700/40 px-4 py-1.5 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Database className="h-4 w-4 mr-2" />
                AI Company Database
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Discover{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500">
                  AI Innovation
                </span>
              </h1>

              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Explore our comprehensive database of AI companies
                revolutionizing industries around the world.
              </p>

              {/* Innovative Search */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30"></div>
                <div className="relative flex items-center bg-gray-900/70 backdrop-blur-sm rounded-2xl p-2 border border-gray-700 shadow-lg shadow-purple-900/20">
                  <Search className="h-6 w-6 text-gray-400 ml-4" />
                  <input
                    type="text"
                    placeholder="Search companies, technologies, or industries..."
                    className="w-full bg-transparent border-0 focus:ring-0 text-white pl-4 pr-4 py-4"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-purple-900/40 transition-all">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Cards */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <List className="h-5 w-5 mr-2 text-cyan-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Company Directory
            </span>
            <span className="ml-3 text-sm bg-gray-800 text-gray-400 px-2 py-0.5 rounded-md">
              {filteredCompanies.length} results
            </span>
          </h2>

          <div className="flex space-x-2">
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-white transition-colors border border-gray-700">
              <Filter className="w-5 h-5" />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-white transition-colors border border-gray-700">
              <PieChart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {filteredCompanies.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 bg-gray-900/50 rounded-lg border border-gray-800 backdrop-blur-sm">
            <div className="p-4 bg-gray-800 rounded-full mb-4 border border-gray-700">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-300 text-lg mb-2">
              No companies match your search criteria
            </p>
            <p className="text-gray-500 text-sm">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="mt-6 bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-2.5 rounded-lg text-white font-medium flex items-center hover:shadow-lg hover:shadow-purple-900/30 transition-all"
            >
              Clear all filters
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 transition-opacity duration-700 ${
              isVisible ? "opacity-100" : ""
            }`}
          >
            {filteredCompanies.map((company, index) => (
              <Link
                to={`/${encodeURIComponent(company["Company Name"] || "")}`}
                key={index}
                className="block group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 group-hover:border-cyan-700/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-900/10 backdrop-blur-sm relative">
                  {/* Growth indicator */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-3 group-hover:rotate-0 transition-transform shadow-md">
                    +{Math.floor(Math.random() * 50) + 10}%
                  </div>

                  <div className="px-6 py-5 border-b border-gray-800 flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 to-cyan-500 transition-colors">
                        {company["Company Name"]}
                      </h2>
                      <div className="flex items-center mt-2 gap-2">
                        <div className="bg-gray-800 text-xs py-1 px-2 rounded-lg text-gray-300 flex items-center border border-gray-700">
                          <Tag className="h-3 w-3 mr-1" />
                          {company["Industry"] || "N/A"}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 ml-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          Math.random() > 0.3 ? "bg-green-500" : "bg-amber-500"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-cyan-400 mr-4 border border-gray-700 group-hover:bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:text-white transition-all">
                        <Building className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Headquarters</p>
                        <p className="text-sm text-gray-300">
                          {company["Headquarters"] || "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-purple-400 mr-4 border border-gray-700 group-hover:bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:text-white transition-all">
                        <DollarSign className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Valuation</p>
                        <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                          {company["Valuation"]
                            ? `${company["Valuation"]}`
                            : "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-fuchsia-400 mr-4 border border-gray-700 group-hover:bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:text-white transition-all">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Website</p>
                        <a
                          href={company["Website"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {company["Website"]?.replace(
                            /^https?:\/\/(www\.)?/,
                            ""
                          ) || "N/A"}
                          <ArrowUpRight className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>

                    {/* AI Score */}
                    <div className="pt-5 mt-1 border-t border-gray-800">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-cyan-400 mr-4 border border-gray-700 group-hover:bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:text-white transition-all">
                            <BrainCircuit className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">AI Score</p>
                            <div className="h-2 w-32 bg-gray-800 rounded-full mt-1.5 overflow-hidden border border-gray-700">
                              <div
                                className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                                style={{
                                  width: `${
                                    Math.floor(Math.random() * 70) + 30
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r from-purple-600 to-cyan-600 transition-all border border-gray-700 group-hover:border-cyan-500/30">
                          <Eye className="h-4 w-4 text-gray-400 group-hover:text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover action indicator at bottom */}
                  <div className="h-1 w-0 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="py-20 mt-12 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1000/1000')] opacity-5 bg-fixed"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900 rounded-full filter blur-[150px] opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-cyan-900/10 border border-cyan-700/20 px-3 py-1 rounded-full text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-xs font-medium mb-4">
              <BrainCircuit className="h-3 w-3 mr-1 text-cyan-500" />
              AI-Powered Analysis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Discover the Future of AI
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proprietary algorithms analyze thousands of data points to
              identify high-potential AI companies before they hit the
              mainstream.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 backdrop-blur-sm relative group hover:border-purple-700/50 transition-all">
              <div className="bg-gray-800 p-3 rounded-lg inline-flex mb-6 group-hover:bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:text-white transition-colors border border-gray-700">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-white font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 to-cyan-500 transition-colors">
                Market Analytics
              </h3>
              <p className="text-gray-400">
                Real-time valuation tracking and market performance metrics to
                keep you informed of every market movement.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <a
                  href="#"
                  className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:text-white flex items-center"
                >
                  Learn more
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 backdrop-blur-sm relative group hover:border-purple-700/50 transition-all">
              <div className="bg-gray-800 p-3 rounded-lg inline-flex mb-6 group-hover:bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:text-white transition-colors border border-gray-700">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-white font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 to-cyan-500 transition-colors">
                Growth Prediction
              </h3>
              <p className="text-gray-400">
                Proprietary AI-driven growth potential scoring system that
                predicts future market performance with remarkable accuracy.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <a
                  href="#"
                  className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:text-white flex items-center"
                >
                  Learn more
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 backdrop-blur-sm relative group hover:border-purple-700/50 transition-all">
              <div className="bg-gray-800 p-3 rounded-lg inline-flex mb-6 group-hover:bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:text-white transition-colors border border-gray-700">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-white font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-500 to-cyan-500 transition-colors">
                Risk Assessment
              </h3>
              <p className="text-gray-400">
                Comprehensive risk level evaluation and volatility metrics to
                help you make informed investment decisions.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <a
                  href="#"
                  className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:text-white flex items-center"
                >
                  Learn more
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action button */}
      <div className="fixed bottom-8 right-8 z-20">
        <button className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4 rounded-full shadow-lg shadow-purple-900/30 hover:shadow-xl hover:shadow-purple-900/40 transition-all group">
          <Users className="h-6 w-6 text-white" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-gray-800">
            Join Community
          </span>
        </button>
      </div>
    </div>
  );
}

export default CompanyList;
