import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  Briefcase,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  Award,
} from "lucide-react";

const CompanyData = () => {
  const { companyName } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const sheetId = "1098MT3Wgfzia7dKjxAyr7jxgH5PpdAt3AOaoII2J9xw";
  const gid = "794818920";
  const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();
        const rows = csvText.split("\n").map((row) => row.split(","));
        const formattedData = rows.slice(1).map((row) => ({
          companyName: row[0],
          websiteURL: row[1],
          industry: row[2],
          headquarters: row[3],
          foundingYear: row[4],
          noEmployees: row[5],
          fundingRaised: row[6],
          revenue: row[7],
          companyValuation: row[8],
          companyDescription: row[9],
          foundersLinkedIn: row[10],
          keyContacts: row[11],
          socialMediaLinks: row[12],
          aiModelUsed: row[13],
          primaryAIUseCase: row[14],
          aiFrameworksUsed: row[15],
          aiProductsServices: row[16],
          patentDetails: row[17],
          aiResearchPapers: row[18],
          partnerships: row[19],
        }));

        const selectedCompany = formattedData.find(
          (item) => item.companyName === decodeURIComponent(companyName)
        );
        setCompany(selectedCompany);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [companyName]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-purple-500 border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-purple-400 text-xl font-light">
            Loading company data...
          </p>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 max-w-md">
          <p className="text-red-400 text-xl mb-4">Company not found</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/30"
          >
            <ArrowLeft size={18} />
            <span>Return to Companies</span>
          </button>
        </div>
      </div>
    );
  }

  const sections = [
    {
      title: "Company Overview",
      items: [
        {
          icon: <Globe size={20} />,
          label: "Website",
          value: company.websiteURL,
          isLink: true,
        },
        {
          icon: <Briefcase size={20} />,
          label: "Industry",
          value: company.industry,
        },
        {
          icon: <MapPin size={20} />,
          label: "Headquarters",
          value: company.headquarters,
        },
        {
          icon: <Calendar size={20} />,
          label: "Founded",
          value: company.foundingYear,
        },
        {
          icon: <Users size={20} />,
          label: "Team Size",
          value: company.noEmployees,
        },
      ],
    },
    {
      title: "Financial Profile",
      items: [
        {
          icon: <DollarSign size={20} />,
          label: "Funding Raised",
          value: company.fundingRaised,
        },
        {
          icon: <TrendingUp size={20} />,
          label: "Revenue",
          value: company.revenue,
        },
        {
          icon: <Award size={20} />,
          label: "Valuation",
          value: company.companyValuation,
        },
      ],
    },
    {
      title: "AI Technology",
      items: [
        { label: "AI Models", value: company.aiModelUsed },
        { label: "Primary Use Case", value: company.primaryAIUseCase },
        { label: "Frameworks", value: company.aiFrameworksUsed },
        { label: "Products/Services", value: company.aiProductsServices },
      ],
    },
    {
      title: "Advanced Details",
      items: [
        { label: "Patents", value: company.patentDetails },
        { label: "Research Papers", value: company.aiResearchPapers },
        { label: "Partnerships", value: company.partnerships },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-black/70 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-700 transition-all duration-300"
          >
            <ArrowLeft size={18} className="text-purple-400" />
            <span>Back</span>
          </button>

          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Company Intel
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-8 border border-purple-800/30 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            {company.companyName}
          </h1>
          <p className="text-gray-300 max-w-3xl text-lg">
            {company.companyDescription || "No company description available."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, idx) => (
            <section
              key={idx}
              className="rounded-xl bg-gray-900/70 p-6 backdrop-blur-sm border border-gray-800 hover:border-purple-900/50 transition-all duration-300 shadow-xl hover:shadow-purple-900/10"
            >
              <h2 className="text-xl font-semibold text-purple-400 mb-4 border-b border-gray-800 pb-2">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <DetailItem key={i} {...item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-xl bg-gray-900/70 p-6 backdrop-blur-sm border border-gray-800 hover:shadow-purple-900/10 transition-all duration-500">
          <h2 className="text-xl font-semibold text-purple-400 mb-4 border-b border-gray-800 pb-2">
            Team & Connections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DetailItem
              label="Founders & LinkedIn"
              value={company.foundersLinkedIn}
            />
            <DetailItem label="Key Contacts" value={company.keyContacts} />
            <DetailItem label="Social Media" value={company.socialMediaLinks} />
          </div>
        </section>
      </main>
    </div>
  );
};

const DetailItem = ({ icon, label, value, isLink }) => {
  if (!value) return null;

  return (
    <div className="group">
      <div className="flex items-center space-x-2 text-gray-400 font-medium">
        {icon && <span className="text-purple-400">{icon}</span>}
        <span>{label}</span>
      </div>
      <div className="mt-1 pl-7">
        {isLink ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors duration-300"
          >
            {value}
          </a>
        ) : (
          <p className="text-white group-hover:text-gray-200 transition-colors duration-300">
            {value}
          </p>
        )}
      </div>
    </div>
  );
};

export default CompanyData;
