import React from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const DataVisualization = () => {
  // Feedback categories data (based on our analysis)
  const categoryData = [
    { name: 'Security Issues', value: 138, color: '#f44336' },
    { name: 'Inappropriate Content', value: 23, color: '#f44336' },
    { name: 'Relevance Issues', value: 16, color: '#ff9800' },
    { name: 'Usability Issues', value: 11, color: '#ffeb3b' },
    { name: 'Misinformation', value: 8, color: '#ff9800' },
    { name: 'AI-Generated Content', value: 15, color: '#ffeb3b' },
    { name: 'Localization Issues', value: 7, color: '#ffeb3b' },
    { name: 'Broken Sites', value: 12, color: '#ff9800' },
    { name: 'Positive Feedback', value: 9, color: '#4caf50' },
    { name: 'Other', value: 295, color: '#9e9e9e' }
  ];

  // Security issues breakdown
  const securityData = [
    { name: 'Scams', value: 57, color: '#ef5350' },
    { name: 'Malware/Virus', value: 46, color: '#e53935' },
    { name: 'Phishing', value: 9, color: '#d32f2f' },
    { name: 'Other Security', value: 26, color: '#c62828' }
  ];

  // Issue distribution by device
  const deviceData = [
    { 
      name: 'Mobile',
      Security: 98,
      Inappropriate: 18,
      Relevance: 12,
      Usability: 9,
      Other: 223
    },
    { 
      name: 'Desktop',
      Security: 40,
      Inappropriate: 5,
      Relevance: 4,
      Usability: 2,
      Other: 121
    }
  ];

  // Issue distribution by browser
  const browserData = [
    { name: 'Chrome', Security: 86, Inappropriate: 17, Other: 213 },
    { name: 'Firefox', Security: 19, Inappropriate: 2, Other: 64 },
    { name: 'Safari', Security: 15, Inappropriate: 1, Other: 35 },
    { name: 'Opera', Security: 6, Inappropriate: 0, Other: 25 },
    { name: 'DuckDuckGo', Security: 5, Inappropriate: 2, Other: 14 }
  ];

  // Priority matrix based on severity and frequency
  const priorityData = [
    { name: 'Security & Scams', count: 138, severity: 10, priority: 1380, color: '#f44336' },
    { name: 'Inappropriate Content', count: 23, severity: 8, priority: 184, color: '#f44336' },
    { name: 'Misinformation', count: 8, severity: 7, priority: 56, color: '#ff9800' },
    { name: 'Broken Sites', count: 12, severity: 6, priority: 72, color: '#ff9800' },
    { name: 'Relevance Issues', count: 16, severity: 5, priority: 80, color: '#ff9800' },
    { name: 'Localization', count: 7, severity: 4, priority: 28, color: '#ffeb3b' },
    { name: 'AI Content', count: 15, severity: 3, priority: 45, color: '#ffeb3b' },
    { name: 'Usability', count: 11, severity: 3, priority: 33, color: '#ffeb3b' }
  ].sort((a, b) => b.priority - a.priority);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full p-4">
    <br/>
      <h2 className="text-xl font-bold mb-4 text-center">DuckDuckGo User Feedback Analysis (Fictional)</h2>
      <br/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Category Distribution - Changed to horizontal bar chart for better readability */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-center">Issue Categories</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={categoryData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 90, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis 
                type="category" 
                dataKey="name" 
                tick={{ fontSize: 12 }} 
                width={120}
              />
              <Tooltip formatter={(value) => [`${value} reports`, 'Count']} />
              <Bar dataKey="value" name="Number of Reports">
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Security Issues Breakdown */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-center">Security Issues Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={securityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {securityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Device Distribution */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-center">Issues by Device</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={deviceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Security" fill="#f44336" />
              <Bar dataKey="Inappropriate" fill="#9c27b0" />
              <Bar dataKey="Relevance" fill="#ff9800" />
              <Bar dataKey="Usability" fill="#ffeb3b" />
              <Bar dataKey="Other" fill="#9e9e9e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Browser Distribution */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-center">Issues by Browser</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={browserData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Security" fill="#f44336" />
              <Bar dataKey="Inappropriate" fill="#9c27b0" />
              <Bar dataKey="Other" fill="#9e9e9e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Priority Matrix */}
        <div className="bg-gray-100 p-4 rounded-lg shadow md:col-span-2">
          <h3 className="text-lg font-semibold mb-2 text-center">Issue Prioritization</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={priorityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="priority" name="Priority Score (Frequency × Severity)">
                {priorityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary and Examples */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Key Findings</h3>
        <ul className="list-disc pl-5 space-y-2">
        <br/>
          <li><span className="font-semibold">Security Issues (138 reports)</span>: Primarily scams (57), malware (46), and phishing attempts (9)</li><br/>
          <li><span className="font-semibold">Inappropriate Content (23 reports)</span>: Primarily NSFW content appearing in non-explicit searches</li> <br/>
          <li><span className="font-semibold">Device Impact</span>: Mobile users report more security and inappropriate content issues</li><br/>
          <li><span className="font-semibold">Browser Distribution</span>: Chrome users reported the most security concerns</li><br/> 
        </ul>
      </div>
 
      {/* // Example reports */}
      {/* <div className="mt-8 bg-gray-100 p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Representative User Reports</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">Query: "couponstock website"</p>
            <p>Comment: "Site redirects to a virus-laden scam."</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <p className="font-semibold">Query: "triumph beyond the shadows (ebook)"</p>
            <p>Comment: "Adult/porn content."</p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <p className="font-semibold">Query: "zesty heritage meals"</p>
            <p>Comment: "AI-generated and off-topic."</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <p className="font-semibold">Query: "is it possible to chill domestic cheddar strips"</p>
            <p>Comment: "Likely AI-authored with no proofreading—lots of errors."</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DataVisualization;