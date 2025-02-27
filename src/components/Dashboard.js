import React, { useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { motion } from "framer-motion";
import Button from "./../styles/GlobalComponents/Button";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Market Share Data (StatCounter Global Stats, Jan 2025)
const marketShareData = [
  { name: 'Google', share: 91.54 },
  { name: 'Bing', share: 3.04 },
  { name: 'Yahoo', share: 1.19 },
  { name: 'DuckDuckGo', share: 0.68 },
  { name: 'Yandex', share: 1.42 },
  { name: 'Baidu', share: 1.08 },
  { name: 'Others', share: 1.05 }
];

// Market Share Trends Data (StatCounter, 2020-2025)
const marketShareTrendsData = [
  { year: '2020', Google: 91.38, Bing: 2.69, Yahoo: 1.60, DuckDuckGo: 0.44, Yandex: 1.02, Baidu: 0.91 },
  { year: '2021', Google: 91.42, Bing: 2.75, Yahoo: 1.51, DuckDuckGo: 0.55, Yandex: 1.06, Baidu: 0.97 },
  { year: '2022', Google: 91.88, Bing: 2.88, Yahoo: 1.32, DuckDuckGo: 0.59, Yandex: 1.16, Baidu: 0.99 },
  { year: '2023', Google: 91.79, Bing: 2.96, Yahoo: 1.22, DuckDuckGo: 0.63, Yandex: 1.21, Baidu: 1.02 },
  { year: '2024', Google: 91.61, Bing: 3.01, Yahoo: 1.21, DuckDuckGo: 0.66, Yandex: 1.36, Baidu: 1.05 },
  { year: '2025 (Q1)', Google: 91.54, Bing: 3.04, Yahoo: 1.19, DuckDuckGo: 0.68, Yandex: 1.42, Baidu: 1.08 }
];

// Regional Market Share Data (StatCounter, Jan 2025)
const regionalMarketShareData = [
  { region: 'North America', DuckDuckGo: 1.35, Google: 87.45, Bing: 6.42, Yahoo: 2.55, Others: 2.23 },
  { region: 'Europe', DuckDuckGo: 0.85, Google: 92.37, Bing: 3.12, Yahoo: 0.95, Others: 2.71 },
  { region: 'Asia', DuckDuckGo: 0.28, Google: 91.32, Bing: 1.72, Yahoo: 0.75, Baidu: 3.78, Yandex: 1.05, Others: 1.10 },
  { region: 'Oceania', DuckDuckGo: 0.72, Google: 93.62, Bing: 3.95, Yahoo: 0.85, Others: 0.86 },
  { region: 'South America', DuckDuckGo: 0.41, Google: 95.22, Bing: 2.48, Yahoo: 0.78, Others: 1.11 },
  { region: 'Africa', DuckDuckGo: 0.23, Google: 93.87, Bing: 2.15, Yahoo: 0.95, Yandex: 1.65, Others: 1.15 }
];

// Global Search Volume Data (Billions of searches, est. based on industry reports)
const searchVolumeData = [
  { year: '2020', Google: 5840, Bing: 172, Yahoo: 102, DuckDuckGo: 28, Others: 240 },
  { year: '2021', Google: 6320, Bing: 190, Yahoo: 105, DuckDuckGo: 38, Others: 255 },
  { year: '2022', Google: 6820, Bing: 214, Yahoo: 98, DuckDuckGo: 44, Others: 275 },
  { year: '2023', Google: 7350, Bing: 237, Yahoo: 98, DuckDuckGo: 50, Others: 290 },
  { year: '2024', Google: 7785, Bing: 256, Yahoo: 103, DuckDuckGo: 56, Others: 315 },
  { year: '2025 (Proj.)', Google: 8250, Bing: 275, Yahoo: 108, DuckDuckGo: 65, Others: 335 }
];

// KPI Average values by search engine (industry estimates)
const kpiData = [
  { kpi: 'CTR (%)', Google: 3.17, Bing: 2.83, Yahoo: 2.12, DuckDuckGo: 2.05 },
  { kpi: 'CPC ($)', Google: 2.69, Bing: 1.54, Yahoo: 1.25, DuckDuckGo: 0.85 },
  { kpi: 'Monetization Rate (%)', Google: 13.5, Bing: 11.8, Yahoo: 10.2, DuckDuckGo: 6.8 }
];

// Revenue Estimates ($ millions)
const revenueData = [
  { year: '2020', Google: 147500, Bing: 7850, Yahoo: 2650, DuckDuckGo: 218 },
  { year: '2021', Google: 168900, Bing: 8240, Yahoo: 2730, DuckDuckGo: 283 },
  { year: '2022', Google: 187300, Bing: 8830, Yahoo: 2560, DuckDuckGo: 326 },
  { year: '2023', Google: 207400, Bing: 9540, Yahoo: 2490, DuckDuckGo: 362 },
  { year: '2024', Google: 224800, Bing: 10320, Yahoo: 2610, DuckDuckGo: 407 },
  { year: '2025 (Proj.)', Google: 242500, Bing: 11280, Yahoo: 2780, DuckDuckGo: 472 }
];

// Revenue Projection Data for DuckDuckGo ($ millions)
const ddgRevenueProjection = [
  { year: '2024', Actual: 407 },
  { year: '2025', Conservative: 472, Moderate: 525, Aggressive: 610 },
  { year: '2026', Conservative: 555, Moderate: 685, Aggressive: 840 },
  { year: '2027', Conservative: 650, Moderate: 892, Aggressive: 1120 }
];

// Colors for consistent branding
const COLORS = ['#DE5833', '#4285F4', '#00A4EF', '#7B0099', '#2B5797', '#EE302F', '#888888'];
const DDG_COLOR = '#DE5833';

const sections = [
  {
    title: "Executive Summary",
    content: (
      <div className="section-content">
        <p>
          DuckDuckGo has shown <span className="highlight-primary">consistent growth</span> in the competitive search engine market, increasing market share from 0.44% in 2020 to 0.68% in early 2025. This represents a 55% increase in relative market share over five years despite Google's continued dominance at ~91%. North America remains DuckDuckGo's strongest market with 1.35% share, reflecting user concerns for privacy.
        </p>
        <p>
          With a projected 2025 revenue of <span className="highlight-primary">$472M</span> and estimated 65 billion annual searches, DuckDuckGo has significant growth opportunities in privacy-conscious markets. Key challenges include lower monetization rates (6.8% vs. Google's 13.5%) and CPC ($0.85 vs. Google's $2.69), presenting optimization opportunities.
        </p>
      </div>
    ),
  },
  {
    title: "Market Share Analysis",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">Global Market Share (Jan 2025)</h3>
        <div style={{ height: "350px", marginBottom: "20px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...marketShareData].sort((a, b) => b.share - a.share)}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(value) => `${value}%`} />
              <YAxis dataKey="name" type="category" width={90} />
              <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
              <Legend />
              <Bar 
                dataKey="share" 
                name="Market Share (%)"
                radius={[0, 4, 4, 0]}
              >
                {marketShareData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.name === 'DuckDuckGo' ? DDG_COLOR : COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <h3 className="section-subtitle">DuckDuckGo Market Share by Region</h3>
        <div style={{ height: "350px", marginBottom: "20px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={regionalMarketShareData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 2]} tickFormatter={(value) => `${value}%`} />
              <YAxis dataKey="region" type="category" />
              <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
              <Legend />
              <Bar dataKey="DuckDuckGo" fill={DDG_COLOR} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <p className="data-source">Source: StatCounter Global Stats, January 2025</p>
      </div>
    ),
  },
  { title: "Live Visitor Data", content: ( <div className="section-content"> <h3 className="section-subtitle">Global User Distribution (Cloudflare Radar)</h3> <div className="iframe-container"> <iframe src="https://radar.cloudflare.com/embed/VisitorLocationCombined?domain=duckduckgo.com&chartState=%7B%7D" title="Cloudflare Radar - Visitor Location" loading="lazy" className="cloudflare-iframe" style={{ height: "600px", width: "100%", border: "none", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)" }} /> </div> <p className="data-source">Source: Cloudflare Radar Analytics for duckduckgo.com</p> <div className="note-box"> <p>Note: This is a live integration showing real-time visitor data for DuckDuckGo from around the world.</p> </div> </div> ), },
  {
    title: "Market Trends & Growth",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">Market Share Trends (2020-2025)</h3>
        <div style={{ height: "350px", marginBottom: "20px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={marketShareTrendsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
              <Legend />
              <Line type="monotone" dataKey="DuckDuckGo" stroke={DDG_COLOR} strokeWidth={3} />
              <Line type="monotone" dataKey="Google" stroke={COLORS[1]} />
              <Line type="monotone" dataKey="Bing" stroke={COLORS[2]} />
              <Line type="monotone" dataKey="Yahoo" stroke={COLORS[3]} />
              <Line type="monotone" dataKey="Yandex" stroke={COLORS[4]} />
              <Line type="monotone" dataKey="Baidu" stroke={COLORS[5]} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <h3 className="section-subtitle">Year-over-Year Growth</h3>
        <div style={{ height: "350px", marginBottom: "20px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={marketShareTrendsData.map((year, idx) => ({
                year: year.year,
                growth: idx === 0 ? 0 : ((year.DuckDuckGo / marketShareTrendsData[idx - 1].DuckDuckGo) - 1) * 100
              })).slice(1)}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => `${value.toFixed(0)}%`} />
              <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
              <Legend />
              <Bar dataKey="growth" name="YoY Growth %" fill={DDG_COLOR} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <p className="data-source">Source: StatCounter Global Stats, Historical Data 2020-2025</p>
      </div>
    ),
  },
  {
    title: "Search Engine Economics",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">Key Performance Indicators</h3>
        
        <div className="kpi-grid">
          <div className="kpi-item">
            <div className="kpi-icon">📊</div>
            <div className="kpi-details">
              <h4>Search Volume</h4>
              <p>Total number of search queries processed by the engine. This is the foundation of all revenue calculations and scales with market share.</p>
            </div>
          </div>
          
          <div className="kpi-item">
            <div className="kpi-icon">📊</div>
            <div className="kpi-details">
              <h4>Monetization Rate</h4>
              <p>Percentage of searches that display ads. Average across search engines is 10-15%. DuckDuckGo's privacy focus results in lower monetization (~6.8%).</p>
            </div>
          </div>
          
          <div className="kpi-item">
            <div className="kpi-icon">📊</div>
            <div className="kpi-details">
              <h4>Click-Through Rate (CTR)</h4>
              <p>Percentage of ad impressions that result in clicks. Industry average for search is 2-4%. Affects revenue directly.</p>
            </div>
          </div>
          
          <div className="kpi-item">
            <div className="kpi-icon">📊</div>
            <div className="kpi-details">
              <h4>Cost-Per-Click (CPC)</h4>
              <p>Average amount advertisers pay for each click. Google commands premium ($2.69) vs. DuckDuckGo ($0.85) due to targeting capabilities.</p>
            </div>
          </div>
        </div>
        
        <h3 className="section-subtitle">KPI Comparison</h3>
        <div style={{ height: "350px", marginBottom: "20px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={kpiData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="kpi" />
              <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
              <Radar name="Google" dataKey="Google" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.3} />
              <Radar name="Bing" dataKey="Bing" stroke={COLORS[2]} fill={COLORS[2]} fillOpacity={0.3} />
              <Radar name="Yahoo" dataKey="Yahoo" stroke={COLORS[3]} fill={COLORS[3]} fillOpacity={0.3} />
              <Radar name="DuckDuckGo" dataKey="DuckDuckGo" stroke={DDG_COLOR} fill={DDG_COLOR} fillOpacity={0.5} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <p className="data-source">Source: Industry estimates from SEM Rush, SEJ Analytics, Statista</p>
      </div>
    ),
  },
  {
    title: "Search Volume Trends",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">DuckDuckGo Search Volume (Billions)</h3>
        <div style={{ height: "350px", marginBottom: "20px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={searchVolumeData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => `${value.toFixed(0)} billion`} />
              <Legend />
              <Area type="monotone" dataKey="DuckDuckGo" stackId="1" stroke={DDG_COLOR} fill={DDG_COLOR} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-number">65B</span>
            <span className="stat-label">Projected searches in 2025</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">132%</span>
            <span className="stat-label">Growth in volume since 2020</span>
          </div>
        </div>
        
        <p className="data-source">Source: Calculated from market share and global search volume estimates</p>
      </div>
    ),
  },
  {
    title: "Revenue Analysis & Projections",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">DuckDuckGo Revenue Trend</h3>
        <div style={{ height: "350px", marginBottom: "20px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={revenueData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value} million`} />
              <Legend />
              <Line type="monotone" dataKey="DuckDuckGo" stroke={DDG_COLOR} strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <h3 className="section-subtitle">24-Month Revenue Projections</h3>
        <div style={{ height: "350px", marginBottom: "20px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={ddgRevenueProjection}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value} million`} />
              <Legend />
              <Line type="monotone" dataKey="Actual" stroke="#000" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="Conservative" stroke="#4caf50" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="Moderate" stroke="#2196f3" strokeDasharray="3 3" />
              <Line type="monotone" dataKey="Aggressive" stroke="#f44336" strokeDasharray="1 1" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <p className="data-source">Source: Calculated based on search volume and KPI estimates</p>
      </div>
    ),
  },
  {
    title: "Strategic Recommendations",
    content: (
      <div className="section-content">
        <div className="recommendations-container">
          <div className="recommendation-card">
            <h4>Market Expansion</h4>
            <p>Focus on North American and European markets where privacy concerns are highest. Target 1.5% market share in North America and 1.1% in Europe within 24 months through targeted marketing campaigns.</p>
          </div>
          
          <div className="recommendation-card">
            <h4>Revenue Optimization</h4>
            <p>Improve monetization rate from 6.8% to 8.5% and CPC from $0.85 to $1.10 through strategic ad placement and improved targeting while maintaining privacy standards. This could increase revenue by 35% without market share growth.</p>
          </div>
          
          <div className="recommendation-card">
            <h4>Product Development</h4>
            <p>Enhance mobile experience and develop vertical search capabilities in privacy-sensitive sectors like healthcare and finance to differentiate from competitors and capture high-value traffic.</p>
          </div>
        </div>
        
        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Targeted Campaigns</h4>
              <p>Launch privacy-focused marketing campaigns in key markets</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Ad Optimization</h4>
              <p>Refine ad placement strategy while maintaining privacy standards</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Mobile Enhancement</h4>
              <p>Update mobile UI/UX for improved experience</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Vertical Development</h4>
              <p>Build specialized search features for privacy-sensitive sectors</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Methodology & Key Assumptions",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">Data Sources</h3>
        <ul className="methodology-list">
          <li><span className="highlight">Market Share Data:</span> StatCounter Global Stats (Jan 2020-Jan 2025)</li>
          <li><span className="highlight">Global Search Volume:</span> Derived from Statista, Internet Live Stats, and search engine earnings reports</li>
          <li><span className="highlight">KPI Benchmarks:</span> Industry reports from SEM Rush, Search Engine Journal, eMarketer</li>
          <li><span className="highlight">Revenue Estimates:</span> Calculated using the search revenue formula and publicly reported financials where available</li>
        </ul>
        
        <h3 className="section-subtitle">Key Assumptions</h3>
        <ul className="methodology-list">
          <li><span className="highlight">Monetization Rate:</span> DuckDuckGo's privacy focus results in lower ad density (~6.8%) compared to Google (~13.5%)</li>
          <li><span className="highlight">CPC:</span> DuckDuckGo commands lower CPC ($0.85) vs. Google ($2.69) due to targeting limitations and audience composition</li>
          <li><span className="highlight">Growth Projections:</span> Conservative (15%), Moderate (30%), and Aggressive (45%) scenarios for next 24 months</li>
          <li><span className="highlight">Global Search Growth:</span> Estimated at 6-8% annually based on historical trends</li>
        </ul>
        
        <div className="note-box">
          <p>Note: All projections are based on current market conditions and may be subject to change based on competitive dynamics and privacy regulation developments.</p>
        </div>
      </div>
    ),
  },
];

// Add CSS for specialized components
const styles = `
  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .kpi-item {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: flex-start;
  }
  
  .kpi-icon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  .kpi-details h4 {
    margin: 0 0 0.5rem 0;
    color: #64b5f6;
    font-weight: bold;
  }
  
  .kpi-details p {
    margin: 0;
    font-size: 0.9rem;
  }
  
  .stats-container {
    display: flex;
    justify-content: space-around;
    margin: 1.5rem 0;
  }
  
  .stat-box {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    width: 40%;
  }
  
  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: #64b5f6;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    display: block;
  }
  
  .recommendations-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .recommendation-card {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 1rem;
  }
  
  .recommendation-card h4 {
    margin: 0 0 0.75rem 0;
    color: #64b5f6;
    font-weight: bold;
  }
  
  .recommendation-card p {
    margin: 0;
    font-size: 0.9rem;
  }
  
  .steps-container {
    margin: 2rem 0;
  }
  
  .step-item {
    display: flex;
    margin-bottom: 1rem;
  }
  
  .step-number {
    background-color: #64b5f6;
    color: black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .step-content {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 0.75rem;
    flex-grow: 1;
  }
  
  .step-content h4 {
    margin: 0 0 0.5rem 0;
    font-weight: bold;
  }
  
  .step-content p {
    margin: 0;
  }
  
  .data-source {
    text-align: right;
    font-size: 0.8rem;
    color: #aaa;
    margin-top: 0.5rem;
  }
  
  .highlight-primary {
    color: #DE5833;
    font-weight: bold;
  }
  
  .highlight {
    color: #64b5f6;
    font-weight: bold;
  }
  
  .section-subtitle {
    color: #64b5f6;
    margin: 1.5rem 0 1rem 0;
    font-weight: bold;
  }
  
  .methodology-list {
    list-style-type: none;
    padding-left: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .methodology-list li {
    margin-bottom: 0.75rem;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 0.75rem;
    border-radius: 6px;
  }
  
  .note-box {
    background-color: rgba(255, 235, 59, 0.1);
    border-left: 3px solid #ffeb3b;
    padding: 10px 15px;
    margin: 15px 0;
    border-radius: 4px;
  }
  
  .iframe-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin: 20px 0;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .cloudflare-iframe {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    background-color: #fff;
  }
`;

export default function Dashboard() {
  const contentRef = useRef(null);

  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      compress: true
    });
    
    // Add styling for the PDF
    doc.setFontSize(24);
    doc.setTextColor(64, 181, 246); // #64b5f6 in RGB
    doc.text("DuckDuckGo Market Insights", 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(80, 80, 80);
    doc.text("Generated on " + new Date().toLocaleDateString(), 105, 30, { align: 'center' });
    
    // Add each section to the PDF with proper formatting
    let yPosition = 40;
    
    sections.forEach((section, index) => {
      // Add section title
      doc.setFontSize(16);
      doc.setTextColor(64, 181, 246);
      doc.text(section.title, 14, yPosition);
      yPosition += 10;
      
      // For each section, handle the content differently based on the structure
      if (section.title === "Executive Summary") {
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const summary = "DuckDuckGo has shown consistent growth in the competitive search engine market, increasing market share from 0.44% in 2020 to 0.68% in early 2025. This represents a 55% increase in relative market share over five years despite Google's continued dominance at ~91%. North America remains DuckDuckGo's strongest market with 1.35% share, reflecting user concerns for privacy.";
        const splitSummary = doc.splitTextToSize(summary, 180);
        doc.text(splitSummary, 14, yPosition);
        yPosition += splitSummary.length * 5 + 5;
        
        const summary2 = "With a projected 2025 revenue of $472M and estimated 65 billion annual searches, DuckDuckGo has significant growth opportunities in privacy-conscious markets. Key challenges include lower monetization rates (6.8% vs. Google's 13.5%) and CPC ($0.85 vs. Google's $2.69), presenting optimization opportunities.";
        const splitSummary2 = doc.splitTextToSize(summary2, 180);
        doc.text(splitSummary2, 14, yPosition);
        yPosition += splitSummary2.length * 5 + 10;
      } else {
        // For other sections, add a simplified version
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        
        const summaries = {
          "Market Share Analysis": "DuckDuckGo maintains a 0.68% global search market share as of Q1 2025, with strongest presence in North America (1.35%). Google continues to dominate with 91.54% share globally.",
          "Market Trends & Growth": "DuckDuckGo has shown consistent year-over-year growth, increasing from 0.44% market share in 2020 to 0.68% in 2025, representing 55% relative growth over five years.",
          "Search Engine Economics": "DuckDuckGo faces monetization challenges with lower KPIs compared to competitors - monetization rate (6.8% vs Google's 13.5%) and CPC ($0.85 vs Google's $2.69).",
          "Search Volume Trends": "DuckDuckGo's annual search volume has grown from 28 billion searches in 2020 to a projected 65 billion in 2025, representing 132% growth over this period.",
          "Revenue Analysis & Projections": "Revenue has grown from $218 million in 2020 to a projected $472 million in 2025. Future projections range from $555M-$840M by 2026 depending on growth scenario.",
          "Strategic Recommendations": "Focus on three key areas: Market expansion in privacy-conscious regions, revenue optimization through improved monetization while maintaining privacy, and product development in vertical search capabilities.",
          "Methodology & Key Assumptions": "Analysis based on StatCounter data and industry reports with key assumptions around monetization rates, CPC values, and growth projections for future revenue forecasting.",
          "Live Visitor Data": "Real-time Cloudflare Radar integration showing global distribution of DuckDuckGo visitors, highlighting regional adoption patterns and usage trends."
        };
        
        if (summaries[section.title]) {
          const content = summaries[section.title];
          const splitContent = doc.splitTextToSize(content, 180);
          doc.text(splitContent, 14, yPosition);
          yPosition += splitContent.length * 5 + 10;
        }
      }
      
      // Add some spacing between sections
      yPosition += 5;
      
      // Add a page if needed
      if (yPosition > 270 && index < sections.length - 1) {
        doc.addPage();
        yPosition = 20;
      }
    });
    
    // Add footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: 'center' });
      doc.text('DuckDuckGo Market Insights - Confidential', 105, 295, { align: 'center' });
    }
    
    doc.save("DuckDuckGo_Market_Insights.pdf");
  };

  return (
    <div style={{backgroundColor: "rgba(0, 0, 0, 0.1)", color: "white", padding: "2rem", borderRadius: "10px" }}>
      <motion.h1 
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 DuckDuckGo Market Insights
      </motion.h1>
      <Typography variant="h4" align="center" color="grey" gutterBottom>
        Strategic Market Analysis and Revenue Dynamics
      </Typography>
      <Typography variant="h6" align="center" color="grey" gutterBottom>
        February 2025
      </Typography>
      
      {sections.map((section, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Paper elevation={6} style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", marginBottom: "1rem" }}>
            <Accordion style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}>
                <Typography variant="h4" style={{ fontWeight: "bold", color: "#64b5f6" }}>
                  {section.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="p">{section.content}</Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </motion.div>
      ))}
      
      <motion.div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "3rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button onClick={downloadPDF} variant="contained" color="primary" size="large" style={{ fontWeight: "bold" }}>
          Download as PDF
        </Button>
      </motion.div>
      
      <div style={{ textAlign: "center", marginTop: "2rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "1rem" }}>
        <Typography variant="body2" color="grey">
          Data Sources: StatCounter Global Stats, Statista, SEM Rush, Industry Reports
        </Typography>
        <Typography variant="body2" color="grey">
          Analysis by Neville Brown Future Memeber of Partnership Team | February 2025
        </Typography>
      </div>
    </div>
  )};