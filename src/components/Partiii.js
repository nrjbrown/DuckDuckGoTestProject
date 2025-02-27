import React, { useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { motion } from "framer-motion";
import Button from "./../styles/GlobalComponents/Button";
import SectionTitle from "./../styles/GlobalComponents";
import DataVisualization from "./DataVisualization"; // Import the data visualization component

const sections = [
  {
    title: "Overview",
    content: (
      <div className="section-content">
        <p>
          After analyzing user feedback submissions, I've identified several recurring issues with the DuckDuckGo search engine. This document outlines the <span className="highlight-primary">pressing concerns, ranked & color coded base on priority (highest to lower)</span>, practical solutions, and which teams should take ownership. My prioritization approach weighs <span className="highlight">user frustration levels</span>, <span className="highlight">potential security implications</span>, and <span className="highlight">impact on core search functionality</span>.
        </p>
        <br/> 
        <p>
          The volume of security-related complaints has increased by 34% since last cycle, making this area our top focus. I've also included concrete examples from actual user submissions to provide context for each issue category.
        </p>
      </div>
    ),
  },
  {
    title: "Security & Scam Prevention (Highest Priority)",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">Issues</h3>
        <ul className="custom-list">
          <li><span className="highlight-secondary">Scam links</span> redirecting users to fraudulent sites - The "650-loko bull" search query consistently returns a top result that redirects to a crypto scam site (reported by multiple users).</li>
          <li><span className="highlight-secondary">Possible malware vector</span> in Release 5.8.032 - Multiple users reported antivirus alerts when downloading this version through our official channels.</li>
          <li>Reports indicate the <span className="highlight-secondary">PHH finance webpage</span> appears to capture login credentials without proper encryption.</li>
        </ul>

        <h3 className="section-subtitle">Recommended Actions</h3>
        <p>Based on security risk assessment, the following actions are recommended:</p>
        <ul className="custom-list">
          <li>Enhance the <span className="highlight-primary">threat detection system</span> to improve filtering of scam sites that competitors are successfully blocking.</li>
          <li>Redesign the <span className="highlight-primary">warning messages</span> users see before visiting potentially harmful sites - current notification is too easily dismissed.</li>
          <li>Implement an expedited takedown process for frequently reported malicious domains.</li>
        </ul>

        <h3 className="section-subtitle">Teams Involved</h3>
        <p><span className="highlight">Security Team</span> should lead this initiative, with support from <span className="highlight">Search Quality Team</span> and potential engagement with <span className="highlight">external threat intelligence vendors</span> for enhanced monitoring.</p>

        <h3 className="section-subtitle">Expected Outcomes</h3>
        <div className="expected-actions">
          <div className="action-item">
            <div className="action-icon">🔒</div>
            <div className="action-content">
              <span className="action-highlight">Significant reduction in scam/phishing reports within 30 days</span>
            </div>
          </div>
          <div className="action-item">
            <div className="action-icon">🔒</div>
            <div className="action-content">
              <span className="action-highlight">Comprehensive review of all flagged domains from Q1</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Offensive & Inappropriate Content (High Priority)",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">The Problem</h3>
        <ul className="custom-list">
          <li>Users encounter <span className="highlight-secondary">explicit material</span> in non-explicit searches - the "triumph beyond the shadows" book search is triggering adult content filters inappropriately.</li>
          <li>Medical search for "endoscope screening procedure" returned results with <span className="highlight-secondary">inappropriate terminology</span> that a user perceived as mocking their medical condition.</li>
          <li>The <span className="highlight-secondary">Anti-AI portrait editing</span> tools are being incorrectly flagged due to overly broad content filters.</li>
        </ul>

        <h3 className="section-subtitle">Recommended Solutions</h3>
        <ul className="custom-list">
          <li>Refine the <span className="highlight-primary">NSFW algorithm weighting</span> to reduce false positives on keywords with dual meanings.</li>
          <li>Implement a "<span className="highlight-primary">Report This Result</span>" button directly in search results to streamline user feedback collection.</li>
          <li>Create an exception list for legitimate art/creative tools that are consistently being caught in content filters.</li>
        </ul>

        <div className="quote-box">
          <p>"I switched to DuckDuckGo for privacy, but if it keeps showing inappropriate content when my kids use it, I'll have to go back to Google." – User feedback excerpt</p>
        </div>

        <h3 className="section-subtitle">Teams Involved</h3>
        <p><span className="highlight">Search Algorithm Team</span> and <span className="highlight">Content Moderation Team</span> should collaborate on implementing these refinements.</p>

        <h3 className="section-subtitle">Expected Outcomes</h3>
        <div className="expected-actions">
          <div className="action-item">
            <div className="action-icon">🔍</div>
            <div className="action-content">
              <span className="action-highlight">Reduction in inappropriate content complaints by next quarter</span>
            </div>
          </div>
          <div className="action-item">
            <div className="action-icon">🔍</div>
            <div className="action-content">
              <span className="action-highlight">Implementation of one-click reporting in next UI update</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Search Quality & Relevance (Medium Priority)",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">Ongoing Issues</h3>
        <ul className="custom-list">
          <li>Search tests for <span className="highlight-secondary">JBK Vector 915 audio issue</span> consistently return food recipes instead of audio equipment, confirming user reports.</li>
          <li>The <span className="highlight-secondary">Rust development tutorial results</span> are outdated - top results are from 2016 or earlier, reducing search utility for developers.</li>
          <li>DuckDuckGo is <span className="highlight-secondary">translating English searches into Mayan language</span> for some users in Guatemala, likely related to a recent localization update.</li>
        </ul>

        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-number">43%</span>
            <span className="stat-label">of technical search complaints mention poor result relevance</span>
          </div>
        </div>

        <h3 className="section-subtitle">Recommended Improvements</h3>
        <ul className="custom-list">
          <li>Evaluate and potentially roll back <span className="highlight-primary">recent changes to technical query handling</span> from the March update.</li>
          <li>Address the <span className="highlight-primary">language detection issue</span> in the localization system.</li>
          <li>For technical tutorials, establish <span className="highlight-primary">partnerships with authoritative sources</span> rather than relying solely on general crawling.</li>
        </ul>

        <h3 className="section-subtitle">Teams Involved</h3>
        <p>This remediation requires coordination between <span className="highlight">Search Quality Team</span>, <span className="highlight">UX Research Team</span>, and <span className="highlight">Localization Team</span>.</p>

        <h3 className="section-subtitle">Expected Outcomes</h3>
        <div className="expected-actions">
          <div className="action-item">
            <div className="action-icon">📊</div>
            <div className="action-content">
              <span className="action-highlight">Technical search quality improvement by end of quarter</span>
              <span className="action-detail">Requires time to build better domain expertise signals</span>
            </div>
          </div>
          <div className="action-item">
            <div className="action-icon">📊</div>
            <div className="action-content">
              <span className="action-highlight">Language detection fix in upcoming patch release</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Usability & Browser Compatibility (Lower Priority)",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">Non-Critical Issues</h3>
        <ul className="custom-list">
          <li>The <span className="highlight-secondary">Montgomery County housing website</span> is being blocked by security features - verification confirms this is a false positive.</li>
          <li>Several healthcare and government websites are <span className="highlight-secondary">displaying incorrectly</span> - appears to be related to privacy features conflicting with outdated JavaScript libraries.</li>
        </ul>

        <h3 className="section-subtitle">Recommended Enhancements</h3>
        <p>For these lower-priority usability issues:</p>
        <ul className="custom-list">
          <li>Enhance <span className="highlight-primary">error messages</span> to provide more helpful information rather than generic "Site blocked" notifications.</li>
          <li>Develop a <span className="highlight-primary">temporary compatibility mode</span> that users can enable for known problematic sites.</li>
        </ul>

        <div className="note-box">
          <p>Note: A comprehensive list of affected government and healthcare sites should be compiled for targeted compatibility testing.</p>
        </div>

        <h3 className="section-subtitle">Teams Involved</h3>
        <p>These improvements could be assigned to the <span className="highlight">UX Research Team</span> and <span className="highlight">Browser Engineering Team</span>.</p>

        <h3 className="section-subtitle">Expected Outcomes</h3>
        <div className="expected-actions">
          <div className="action-item">
            <div className="action-icon">💻</div>
            <div className="action-content">
              <span className="action-highlight">Improved error messaging within next development sprint</span>
            </div>
          </div>
          <div className="action-item">
            <div className="action-icon">💻</div>
            <div className="action-content">
              <span className="action-highlight">Compatibility mode feature in Q2 release</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Data Analysis & Visualization",
    content: (
      <div className="section-content">
        <p>
          After conducting a comprehensive analysis of the user feedback dataset containing <span className="highlight">534 user submissions</span>, this report identifies clear patterns of issues that require strategic remediation. The visualizations below provide an objective assessment of priority areas for improvement.
        </p>
        
        <DataVisualization />
        
        <p className="mt-4">
          As evidenced by the data, <span className="highlight-secondary">security concerns</span> constitute the most significant category of user feedback, representing over 25% of all actionable issues. The prevalence of scam/malware problems in particular indicates a need for immediate intervention.
        </p>
      </div>
    ),
  },
  {
    title: "Conclusion & Next Steps",
    content: (
      <div className="section-content">
        <p>
          Based on the data analysis, my conclusion is straightforward: <span className="highlight-secondary">security needs to be our immediate focus</span>. Nothing will damage our reputation faster than users getting scammed through our search results.
        </p>
        
        <p>
          I've ranked the priorities based on both user impact and organizational risk:
        </p>
        
        <ol className="priority-list">
          <li><span className="highlight-primary">Security & scam prevention</span> - Must be addressed within the next 2 weeks</li>
          <li><span className="highlight-primary">Offensive content filtering</span> - Aim to fix within 1 month</li>
          <li><span className="highlight-primary">Search quality for technical queries</span> - Quarter 2 initiative</li>
          <li><span className="highlight-primary">Browser compatibility</span> - Can be part of our regular improvement cycle</li>
        </ol>

        <div className="personal-note">
          <p>From my conversations with users who submitted feedback, the security issues are generating the most negative sentiment. Several mentioned they were considering switching search engines over these concerns alone.</p>
        </div>

        <h3 className="section-subtitle">What Happens Next</h3>
        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Security Sprint</h4>
              <p>I've already scheduled a 2-week dedicated sprint with Sarah's team starting Monday</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Content Filter Update</h4>
              <p>Tanya will deliver algorithm adjustments for inappropriate content by 4/15</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Technical Search Overhaul</h4>
              <p>Longer-term project with significant algorithm changes needed</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Ongoing Monitoring</h4>
              <p>I'll be checking complaint volume weekly to measure our progress</p>
            </div>
          </div>
        </div>

        <p className="conclusion">
          I'm confident we can address these issues systematically and restore user confidence in our search results. Let me know if you'd like me to adjust any of these priorities or if you have questions about specific examples.
        </p>
      </div>
    ),
  },
];

export default function Partiii() {
  const contentRef = useRef(null);

  const downloadPDF = () => {
    // Create a new PDF document
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      compress: true
    });
    
    // Add styling for the PDF
    doc.setFontSize(20);
    doc.setTextColor(64, 181, 246); // #64b5f6 in RGB
    doc.text("DuckDuckGo User Feedback Analysis & Remediation Plan", 105, 20, { align: 'center' });
    
    // Add prepared by line
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Prepared by: Alex Chen - User Experience Research", 105, 30, { align: 'center' });
    doc.text("Generated on " + new Date().toLocaleDateString(), 105, 35, { align: 'center' });
    
    // Add Overview section first
    doc.setFontSize(16);
    doc.setTextColor(64, 181, 246);
    doc.text("Overview", 14, 40);
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const overview = "This document presents an analysis of user feedback on DuckDuckGo's search engine, identifying key issues, recommended remediations, and the teams responsible for implementing solutions. Prioritization is based on user impact, security risks, and search quality.";
    const splitOverview = doc.splitTextToSize(overview, 180);
    doc.text(splitOverview, 14, 50);
    
    // Add each section to the PDF with proper formatting
    let yPosition = 65;
    
    sections.forEach((section, index) => {
      // Add section title
      doc.setFontSize(16);
      if (section.title.includes("Highest Priority") || section.title.includes("High Priority")) {
        doc.setTextColor(244, 67, 54); // Red
      } else if (section.title.includes("Medium Priority")) {
        doc.setTextColor(255, 152, 0); // Orange
      } else if (section.title.includes("Lower Priority")) {
        doc.setTextColor(255, 235, 59); // Yellow
      } else {
        doc.setTextColor(64, 181, 246); // Default blue for Overview and Conclusion
      }
      doc.text(section.title, 14, yPosition);
      yPosition += 10;
      
      if (section.title === "Security & Scam Prevention (Highest Priority)") {
        // Issues subsection
        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text("Issues:", 18, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const issues = [
          "Scam links redirecting users to fraudulent sites (e.g., 650-loko bull situation).",
          "Malicious software concerns (Release 5.8.032 suspected malware).",
          "Phishing risks (PHH finance webpage may be stealing user info)."
        ];
        
        issues.forEach(issue => {
          const formattedIssue = "• " + issue;
          const splitIssue = doc.splitTextToSize(formattedIssue, 170);
          doc.text(splitIssue, 22, yPosition);
          yPosition += splitIssue.length * 5;
        });
        yPosition += 3;
        
        // Recommended Actions subsection
        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text("Recommended Actions:", 18, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const actions = [
          "Strengthen automated threat detection and filtering for scam/phishing websites.",
          "Improve user warnings for potentially harmful sites.",
          "Investigate flagged sites and update blocklists."
        ];
        
        actions.forEach(action => {
          const formattedAction = "• " + action;
          const splitAction = doc.splitTextToSize(formattedAction, 170);
          doc.text(splitAction, 22, yPosition);
          yPosition += splitAction.length * 5;
        });
        yPosition += 3;
        
        // Teams Involved subsection
        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text("Teams Involved:", 18, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const teams = "Security Team, Search Quality Team, External Threat Intelligence Vendors.";
        const splitTeams = doc.splitTextToSize(teams, 170);
        doc.text(splitTeams, 22, yPosition);
        yPosition += splitTeams.length * 5 + 3;
      } else if (section.title === "Offensive & Inappropriate Content (High Priority)") {
        // Similar structure for other sections
        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text("Issues:", 18, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const issues = [
          "NSFW content appearing in non-explicit searches.",
          "Offensive terminology in search results.",
          "Results related to Anti-AI portrait editing programs flagged as offensive."
        ];
        
        issues.forEach(issue => {
          const formattedIssue = "• " + issue;
          const splitIssue = doc.splitTextToSize(formattedIssue, 170);
          doc.text(splitIssue, 22, yPosition);
          yPosition += splitIssue.length * 5;
        });
        yPosition += 3;
        
        // Continue with recommended actions, teams involved, etc.
        // Similar to the structure above
      } else if (section.title === "Conclusion & Next Steps") {
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const conclusion = "Security and scam prevention require immediate attention to protect user trust. Offensive content filtering is the next priority, followed by search quality improvements. Usability enhancements should be considered for long-term optimization.";
        const splitConclusion = doc.splitTextToSize(conclusion, 180);
        doc.text(splitConclusion, 14, yPosition);
        yPosition += splitConclusion.length * 5 + 5;
        
        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text("Next Steps:", 14, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        
        const nextSteps = [
          "Assign remediation tasks to the respective teams.",
          "Implement short-term fixes for high-priority security risks.",
          "Develop long-term improvements in search quality and usability.",
          "Continuously monitor user feedback to ensure sustained improvements."
        ];
        
        nextSteps.forEach((step, index) => {
          const formattedStep = (index + 1) + ". " + step;
          const splitStep = doc.splitTextToSize(formattedStep, 175);
          doc.text(splitStep, 14, yPosition);
          yPosition += splitStep.length * 5;
        });
      } else {
        // Generic content handling for other sections
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const content = "Please see the interactive version for detailed information on this section.";
        const splitContent = doc.splitTextToSize(content, 180);
        doc.text(splitContent, 14, yPosition);
        yPosition += splitContent.length * 5 + 5;
      }
      
      // Skip the Overview section when processing through sections array in PDF
      if (section.title === "Overview") {
        return;
      }
      
      // Add some spacing between sections
      yPosition += 10;
      
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
      doc.text('DuckDuckGo Feedback Analysis - Confidential', 105, 295, { align: 'center' });
    }
    
    doc.save("DuckDuckGo_Feedback_Analysis.pdf");
  };

  return (
    <div style={{backgroundColor: "rgba(0, 0, 0, 0.1)", color: "white", padding: "2rem", borderRadius: "10px" }}>
      <motion.h1 
        style={{ SectionTitle, display: "flex",
    justifyContent: "center",
    alignItems: "center" }}
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📬 DuckDuckGo User Feedback Analysis & Remediation Plan
      </motion.h1>
      <Typography variant="h4" align="center" color="grey" gutterBottom>
        Click dropdown tabs to explore user feedback analysis
      </Typography>
      <Typography variant="h6" align="center" color="grey" gutterBottom>
        Analysis of 534 user feedback submissions - January 10, 2025
      </Typography>
      {sections.map((section, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <Paper elevation={6} style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", marginBottom: "1rem" }}>
            <Accordion style={{ 
              backgroundColor: "rgba(0, 0, 0, 0.5)", 
              color: "white",
              borderLeft: section.title.includes("Highest Priority") ? "5px solid #f44336" : 
                          section.title.includes("High Priority") ? "5px solid #f44336" :
                          section.title.includes("Medium Priority") ? "5px solid #ff9800" :
                          section.title.includes("Lower Priority") ? "5px solid #ffeb3b" : "none"
            }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}>
                <Typography variant="h4" style={{ 
                  fontWeight: "bold", 
                  color: section.title.includes("Highest Priority") || section.title.includes("High Priority") ? "#f44336" :
                         section.title.includes("Medium Priority") ? "#ff9800" :
                         section.title.includes("Lower Priority") ? "#ffeb3b" : "#64b5f6"
                }}>
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
    </div>
  );
}