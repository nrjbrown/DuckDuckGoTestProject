import React, { useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { motion } from "framer-motion";
import Button from "./../styles/GlobalComponents/Button";
import SectionTitle from "./../styles/GlobalComponents";


const sections = [
  {
    title: "Project Overview",
    content: (
      <div className="section-content">
        <h3 className="section-subtitle">Project Rationale & Impact</h3>
        <p>
          As part of Microsoft's AI strategy, I played a key role as a <span className="highlight">SCRUM Master</span> in implementing <span className="highlight-primary">Co-Pilot</span> within Microsoft Teams (AI Research Test Group). This initiative aligned with Microsoft's mission of <em>empowering everyone on the planet to achieve more</em>. Given Teams' widespread adoption, integrating AI-powered assistance presented an opportunity to enhance <span className="highlight-secondary">user experience</span> and <span className="highlight-secondary">workplace efficiency</span>.
        </p>

        <h3 className="section-subtitle">Why Pursue This Project?</h3>
        <p>Our decision was backed by <span className="highlight-secondary">user feedback</span> and <span className="highlight-secondary">industry trends</span>:</p>
        <ul className="custom-list">
          <li>Internal data showed that <span className="highlight-secondary">Teams users frequently sought automation</span> for repetitive tasks.</li>
          <li>Market research indicated that <span className="highlight-secondary">AI-assisted workflows</span> led to <span className="highlight-primary">30% efficiency improvements</span>.</li>
          <li>Competitor analysis suggested that AI-driven collaboration tools were <span className="highlight-secondary">increasingly in demand</span>.</li>
        </ul>

        <h3 className="section-subtitle">Defining & Measuring Success (KPIs)</h3>
        <p>We structured our success metrics using the <span className="highlight">SMART methodology</span>:</p>
        <div className="kpi-grid">
          <div className="kpi-item">
            <div className="kpi-icon">✅</div>
            <div className="kpi-details">
              <h4>User Adoption Rate</h4>
              <p>Goal: <span className="highlight-primary">50% adoption</span> within the beta testing group.</p>
            </div>
          </div>
          <div className="kpi-item">
            <div className="kpi-icon">✅</div>
            <div className="kpi-details">
              <h4>Task Automation Efficiency</h4>
              <p>Target: <span className="highlight-primary">40% reduction</span> in manual tasks.</p>
            </div>
          </div>
          <div className="kpi-item">
            <div className="kpi-icon">✅</div>
            <div className="kpi-details">
              <h4>User Satisfaction Score</h4>
              <p>Aim: <span className="highlight-primary">80% positive feedback</span> from test users.</p>
            </div>
          </div>
          <div className="kpi-item">
            <div className="kpi-icon">✅</div>
            <div className="kpi-details">
              <h4>Feature Utilization Metrics</h4>
              <p>Tracking engagement with key Co-Pilot features like <span className="highlight-secondary">meeting summaries</span> and <span className="highlight-secondary">real-time suggestions</span>.</p>
            </div>
          </div>
        </div>

        <h3 className="section-subtitle">Complex Decisions & Challenges</h3>
        <p>
          As the <span className="highlight">SCRUM Master</span>, I worked closely with Product Managers and development teams to balance <span className="highlight-secondary">AI automation</span> and <span className="highlight-secondary">user control</span>. Key challenges included:
        </p>
        <div className="challenges-container">
          <div className="challenge-card">
            <h4>Optimizing AI Interventions</h4>
            <p>Users wanted help, but <span className="highlight-secondary">not too frequently</span>—we fine-tuned Co-Pilot's behavior based on <span className="highlight-secondary">real-world testing</span>.</p>
          </div>
          <div className="challenge-card">
            <h4>Privacy & Security Compliance</h4>
            <p>Ensuring Co-Pilot met <span className="highlight-secondary">Microsoft's enterprise-grade security</span> standards without <span className="highlight-secondary">compromising usability</span>.</p>
          </div>
          <div className="challenge-card">
            <h4>Feature Prioritization (RACI Framework)</h4>
            <p>Deciding <span className="highlight-secondary">which AI capabilities to launch first</span> based on <span className="highlight-secondary">impact and feasibility</span>.</p>
          </div>
        </div>

        <h3 className="section-subtitle">Final Outcome</h3>
        <p>
          Co-Pilot was successfully integrated into <span className="highlight-secondary">Teams Beta</span>, rolled out to a <span className="highlight-secondary">select internal Microsoft user group</span>. The results exceeded expectations:
        </p>
        <div className="results-container">
          <div className="result-item">
            <div className="result-icon">🚀</div>
            <div className="result-content">
              <span className="result-highlight">60% Adoption Rate</span>
              <span className="result-detail">(10% above target)</span>
            </div>
          </div>
          <div className="result-item">
            <div className="result-icon">🚀</div>
            <div className="result-content">
              <span className="result-highlight">45% Task Automation Improvement</span>
              <span className="result-detail">streamlining redundant workflows</span>
            </div>
          </div>
          <div className="result-item">
            <div className="result-icon">🚀</div>
            <div className="result-content">
              <span className="result-highlight">85% User Satisfaction</span>
              <span className="result-detail">with positive feedback on usability</span>
            </div>
          </div>
        </div>
        <p className="conclusion">
          These results <span className="highlight-secondary">validated</span> the project's success and set the stage for <span className="highlight-secondary">broader enterprise deployment</span>.
        </p>
      </div>
    ),
  },
  {
    title: "Decision-Making Process",
    content: (
      <div className="section-content">
        <p>
          A key decision involved prioritizing feedback from the <span className="highlight">RACI group</span> and determining feature implementation alongside the Product Manager. Options considered included:
        </p>
        <div className="options-container">
          <div className="option-card">
            <h4>Fast-Track Approach</h4>
            <p>AI enhancements for immediate impact</p>
          </div>
          <div className="option-card">
            <h4>Phased Approach</h4>
            <p>Controlled testing with gradual rollout</p>
          </div>
        </div>
        <p>
          We mitigated risks by conducting <span className="highlight-secondary">iterative feedback loops</span> and <span className="highlight-secondary">A/B testing</span> within a beta release for internal Microsoft clients, ensuring seamless adoption.
        </p>
      </div>
    ),
  },
  {
    title: "Project Delivery Approach",
    content: (
      <div className="section-content">
        <p>
          We employed <span className="highlight">SCRUM methodology</span> to break down deliverables into sprints, ensuring continuous progress. <span className="highlight-secondary">SMART KPIs</span>, such as user adoption rates and efficiency improvements, guided our iterations.
        </p>
        <div className="approach-steps">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Core Functionality Focus</h4>
              <p>Prioritizing essential AI features</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Validation Phase</h4>
              <p>Quick testing and feedback collection</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Feature Expansion</h4>
              <p>Building on validated foundation</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Phased Deployment</h4>
              <p>Successful rollout exceeding expectations</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Lessons Learned",
    content: (
      <div className="section-content">
        <p>If I could redo this project, I would make these key improvements:</p>
        <div className="lessons-container">
          <div className="lesson-card">
            <div className="lesson-icon">💡</div>
            <div className="lesson-content">
              <h4>Enhanced Stakeholder Communication</h4>
              <p>Incorporating more frequent cross-functional check-ins</p>
            </div>
          </div>
          <div className="lesson-card">
            <div className="lesson-icon">💡</div>
            <div className="lesson-content">
              <h4>Optimized Onboarding Experience</h4>
              <p>Accelerating adoption and minimizing initial learning curves</p>
            </div>
          </div>
          <div className="lesson-card">
            <div className="lesson-icon">💡</div>
            <div className="lesson-content">
              <h4>Reinforced Iterative Testing</h4>
              <p>Validating the importance of agile adaptability</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Parti() {
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
    doc.text("DuckDuckGo Project Report", 105, 20, { align: 'center' });
    
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
      if (section.title === "Project Overview") {
        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text("Project Rationale & Impact", 14, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const rationale = "As part of Microsoft's AI strategy, I played a key role as a SCRUM Master in implementing Co-Pilot within Microsoft Teams. This initiative aligned with Microsoft's mission of empowering everyone on the planet to achieve more.";
        const splitRationale = doc.splitTextToSize(rationale, 180);
        doc.text(splitRationale, 14, yPosition);
        yPosition += splitRationale.length * 5 + 5;
        
        doc.setFontSize(14);
        doc.setTextColor(100, 100, 100);
        doc.text("Why Pursue This Project?", 14, yPosition);
        yPosition += 8;
        
        doc.setFontSize(10);
        const bullets = [
          "Internal data showed that Teams users frequently sought automation for repetitive tasks.",
          "Market research indicated that AI-assisted workflows led to 30% efficiency improvements.",
          "Competitor analysis suggested that AI-driven collaboration tools were increasingly in demand."
        ];
        
        bullets.forEach(bullet => {
          const splitBullet = doc.splitTextToSize("• " + bullet, 170);
          doc.text(splitBullet, 20, yPosition);
          yPosition += splitBullet.length * 5 + 3;
        });
        
        // Replace the KPIs section in your downloadPDF function with this code:
doc.setFontSize(14);
doc.setTextColor(100, 100, 100);
doc.text("Defining & Measuring Success (KPIs)", 14, yPosition);
yPosition += 8;

const kpis = [
  { title: "User Adoption Rate", desc: "Goal: 50% adoption within the beta testing group." },
  { title: "Task Automation Efficiency", desc: "Target: 40% reduction in manual tasks." },
  { title: "User Satisfaction Score", desc: "Aim: 80% positive feedback from test users." },
  { title: "Feature Utilization Metrics", desc: "Tracking engagement with key Co-Pilot features." }
];

doc.setFontSize(10);
doc.setTextColor(60, 60, 60);

kpis.forEach((kpi) => {
  // Title with checkmark
  doc.setFontSize(11);
  doc.setFont(undefined, 'bold');
  const kpiTitle = "✓ " + kpi.title;
  doc.text(kpiTitle, 20, yPosition);
  yPosition += 5;
  
  // Description with proper indentation
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  const kpiDesc = doc.splitTextToSize(kpi.desc, 165);
  doc.text(kpiDesc, 25, yPosition);
  yPosition += kpiDesc.length * 5 + 3;
});

// Replace the Final Outcome section with this code:
doc.setFontSize(14);
doc.setTextColor(100, 100, 100);
doc.text("Final Outcome", 14, yPosition);
yPosition += 8;

const outcomes = [
  { title: "60% Adoption Rate", desc: "(10% above target)" },
  { title: "45% Task Automation Improvement", desc: "streamlining redundant workflows" },
  { title: "85% User Satisfaction", desc: "with positive feedback on usability" }
];

doc.setFontSize(10);
doc.setTextColor(60, 60, 60);

outcomes.forEach((outcome) => {
  // Title with arrow
  doc.setFontSize(11);
  doc.setFont(undefined, 'bold');
  const outcomeTitle = "→ " + outcome.title;
  doc.text(outcomeTitle, 20, yPosition);
  yPosition += 5;
  
  // Description with proper indentation
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  const outcomeDesc = doc.splitTextToSize(outcome.desc, 165);
  doc.text(outcomeDesc, 25, yPosition);
  yPosition += outcomeDesc.length * 5 + 3;
});
      } else {
        // For other sections that contain JSX elements
        doc.setFontSize(12);
        doc.setTextColor(60, 60, 60);
        
        // For sections with JSX content, add a simplified version
        if (section.title === "Decision-Making Process") {
          const content = "A key decision involved prioritizing feedback from the RACI group and determining feature implementation alongside the Product Manager. We considered both fast-tracking AI enhancements and implementing a phased rollout approach. Risks were mitigated through iterative feedback loops and A/B testing.";
          const splitContent = doc.splitTextToSize(content, 180);
          doc.text(splitContent, 14, yPosition);
          yPosition += splitContent.length * 5 + 10;
        }
        else if (section.title === "Project Delivery Approach") {
          const content = "We employed SCRUM methodology with SMART KPIs guiding our iterations. Our approach focused on core functionality first, followed by validation, feature expansion, and phased deployment. This methodical process led to successful deployment exceeding initial expectations.";
          const splitContent = doc.splitTextToSize(content, 180);
          doc.text(splitContent, 14, yPosition);
          yPosition += splitContent.length * 5 + 10;
        }
        else if (section.title === "Lessons Learned") {
          const content = "Key improvements for future projects include enhanced stakeholder communication with more frequent cross-functional check-ins, optimized onboarding experience to accelerate adoption, and reinforced iterative testing to validate the importance of agile adaptability.";
          const splitContent = doc.splitTextToSize(content, 180);
          doc.text(splitContent, 14, yPosition);
          yPosition += splitContent.length * 5 + 10;
        }
        else {
          // For any other sections
          const content = "This section contains detailed information. Please refer to the web version for the full experience.";
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
      doc.text('DuckDuckGo Project - Confidential', 105, 295, { align: 'center' });
    }
    
    doc.save("DuckDuckGo_Project.pdf");
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
         Postmortem Analysis 📝 
      </motion.h1>
      <Typography variant="h4" align="center" color="grey" gutterBottom>
        Click Dropdown Tabs for Insights
      </Typography>
      <Typography variant="h6" align="center" color="grey" gutterBottom>
      Retrospective Utilizing Agile Frameworks 
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
    </div>
  );
}