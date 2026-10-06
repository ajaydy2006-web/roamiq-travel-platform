import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#6B7280"))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, 750, "ROAMIQ — HACKATHON TECH STACK & JUDGING PREPARATION GUIDE")
            self.setStrokeColor(colors.HexColor("#D1D5DB"))
            self.setLineWidth(0.5)
            self.line(54, 742, 612 - 54, 742)
            
        # Footer
        self.setStrokeColor(colors.HexColor("#D1D5DB"))
        self.setLineWidth(0.5)
        self.line(54, 48, 612 - 54, 48)
        
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(612 - 54, 34, page_text)
        self.drawString(54, 34, "RoamIQ Platform • Confidential Hackathon Defense Pitch Kit")
        self.restoreState()

def create_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=64,
        bottomMargin=64
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    c_primary = colors.HexColor("#0A3323")      # Deep Botanical Green
    c_accent = colors.HexColor("#C27A6E")       # Terracotta Rose
    c_secondary = colors.HexColor("#105666")    # Deep Ocean Teal
    c_dark = colors.HexColor("#1F2937")         # Dark Charcoal Body
    c_bg_light = colors.HexColor("#F8FAFC")     # Slate 50
    c_card_border = colors.HexColor("#E2E8F0")  # Slate 200

    # Custom Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=c_primary,
        spaceAfter=6
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        textColor=c_accent,
        spaceAfter=15
    )
    
    h1_style = ParagraphStyle(
        'Heading1Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=16,
        leading=20,
        textColor=c_primary,
        spaceBefore=14,
        spaceAfter=8,
        keepWithNext=True
    )
    
    h2_style = ParagraphStyle(
        'Heading2Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=c_secondary,
        spaceBefore=10,
        spaceAfter=6,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=c_dark,
        spaceAfter=6
    )

    q_title_style = ParagraphStyle(
        'QTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=c_primary,
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )

    badge_style = ParagraphStyle(
        'Badge',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=colors.white
    )

    code_style = ParagraphStyle(
        'CodeStyle',
        parent=styles['Normal'],
        fontName='Courier',
        fontSize=8.5,
        leading=11,
        textColor=c_primary
    )

    story = []

    # Title Banner
    story.append(Paragraph("ROAMIQ TRAVEL PLATFORM", title_style))
    story.append(Paragraph("Technical Architecture, Feature Deep-Dive & Hackathon Jury Q&A Master Guide", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_accent, spaceBefore=0, spaceAfter=12))

    # Executive Overview
    story.append(Paragraph("1. System Overview & Problem Statement", h1_style))
    overview_text = (
        "<b>RoamIQ</b> is an AI-powered Indian Travel Decision Engine designed to solve the critical flaws of "
        "traditional travel planning tools: static itineraries, generic tourist-trap recommendations, hidden scam risks, "
        "and uncoordinated budget expectations. Covering all <b>28 Indian States & 8 Union Territories</b>, RoamIQ provides "
        "an end-to-end linear discovery journey that dynamically adapts to weather changes, budget parameters, user preferences, "
        "and real-time local availability."
    )
    story.append(Paragraph(overview_text, body_style))

    # Tech Stack Breakdown Table
    story.append(Spacer(1, 6))
    story.append(Paragraph("2. Complete Technology Stack Architecture", h1_style))

    tech_data = [
        [Paragraph("<b>Component</b>", body_style), Paragraph("<b>Technology / Tool</b>", body_style), Paragraph("<b>Purpose & Architectural Rationale</b>", body_style)],
        [Paragraph("<b>Frontend Core</b>", body_style), Paragraph("React 19, TypeScript 5.7", body_style), Paragraph("Component-based architecture, full type-safety for complex travel data models.", body_style)],
        [Paragraph("<b>Build Tooling</b>", body_style), Paragraph("Vite 6, ESBuild", body_style), Paragraph("Sub-millisecond HMR, optimized production tree-shaking and ultra-fast bundle size.", body_style)],
        [Paragraph("<b>Styling System</b>", body_style), Paragraph("Tailwind CSS v4, Vanilla CSS Tokens", body_style), Paragraph("Custom botanical dark theme palette (#0A3323, #D3968C), responsive dynamic design system.", body_style)],
        [Paragraph("<b>Animations</b>", body_style), Paragraph("Framer Motion 12", body_style), Paragraph("Smooth step transitions, AI thinking modal overlays, micro-interactions for high UX polish.", body_style)],
        [Paragraph("<b>Icons & Visuals</b>", body_style), Paragraph("Lucide React", body_style), Paragraph("Lightweight, consistent vector icon set across weather, risk, budget, and route components.", body_style)],
        [Paragraph("<b>Intelligence Engine</b>", body_style), Paragraph("TypeScript Custom Services", body_style), Paragraph("Interest-first destination scoring, weather rain-guard replanning, travel score calculator.", body_style)],
        [Paragraph("<b>Repository & CI/CD</b>", body_style), Paragraph("Git, GitHub, GitHub CLI (gh)", body_style), Paragraph("Version control hosted at <code>https://github.com/ajaydy2006-web/roamiq-travel-platform</code>.", body_style)]
    ]

    t_tech = Table(tech_data, colWidths=[1.3*inch, 1.8*inch, 3.9*inch])
    t_tech.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), c_bg_light),
        ('GRID', (0,0), (-1,-1), 0.5, c_card_border),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_tech)
    story.append(Spacer(1, 10))

    # Key Architectural Innovations & Features
    story.append(Paragraph("3. Core Innovation Modules", h1_style))
    
    features = [
        ("Strict Linear Journey Flow (Steps 0–10)", "Progressive disclosure model preventing decision fatigue. Ensures users follow a structured flow from query input → recommendation → local hidden gems → festivals → AI itinerary → logistics → budget → safety → translation → adaptive replanning."),
        ("Interest-First Recommendation Algorithm", "Calculates a composite score (max 98%) based on User Interest Match (+30pts), Budget Cushion (+20pts), Crowd Index (+15pts), and Vacation Duration Fit (+15pts). Filter enforces zero irrelevant destination recommendations."),
        ("Adaptive Replanning Engine (Weather Rain-Guard)", "Simulates real-time weather disruption (e.g., sudden monsoon rain) and dynamically swaps outdoor treks/viewpoints with indoor artisanal, museum, and culinary experiences without invalidating the trip."),
        ("Travel Intelligence Score (6-Metric Matrix)", "Provides an objective 100-point rating evaluating Cost, Safety, Crowd, Weather, Transport, and Overall Convenience with plain-English justification bullets."),
        ("Tourist Price Guard & ScamShield", "Protects travelers from overcharging with real-time price baselines (observed vs fair market rate) and specific actionable scam triggers & mitigation strategies."),
        ("Local Language & Audio Translator", "Empowers travelers with localized phrases, native script, phonetic guides, usage notes, and audio playback for hassle-free local interaction.")
    ]

    for title, desc in features:
        story.append(Paragraph(f"• <b>{title}</b>: {desc}", body_style))

    story.append(Spacer(1, 10))

    # Comprehensive Hackathon Jury Q&A
    story.append(Paragraph("4. Hackathon Defense & Jury Q&A Kit", h1_style))
    story.append(Paragraph("Anticipated questions from technical, product, and business judges with ideal answers.", body_style))

    qa_list = [
        # Technical
        ("Q1: What is the architectural motivation behind choosing React 19 + Vite instead of Next.js?",
         "TECHNICAL ARCHITECTURE",
         "<b>Answer:</b> RoamIQ is built as a highly responsive, real-time client-side decision dashboard. "
         "Using Vite with React 19 gives us instant module replacement during demo presentation, zero server round-trip latency when filtering/scoring 28 states & 8 UTs client-side, and straightforward static deployment. "
         "For a hackathon setting where execution speed, smooth animations (Framer Motion), and instant interactive step progression are key, client-side SPA architecture eliminates serverless cold starts and dynamic API fetch delays."),

        ("Q2: How does your Recommendation Engine calculate destination match scores?",
         "ALGORITHM & DATA",
         "<b>Answer:</b> The scoring algorithm (located in <code>roamServices.ts</code>) uses a multi-factor weighted model:<br/>"
         "1. <b>Interest Match (30 pts):</b> Computes exact/substring match percentage between user-selected interests and destination tags.<br/>"
         "2. <b>Budget Alignment (20 pts):</b> Compares group-specific estimated budget against query budget, awarding full points if within budget + cost cushion.<br/>"
         "3. <b>Crowd Factor (15 pts):</b> Prefers lower crowd levels unless specified otherwise.<br/>"
         "4. <b>Duration Fit (15 pts):</b> Evaluates proximity to ideal duration days.<br/>"
         "The final score is normalized between 65% and 98% with transparent reason bullets explaining exactly <i>why</i> the destination matched."),

        ("Q3: How does the Adaptive Replanning Engine work during weather disruptions?",
         "AI & RESILIENCE",
         "<b>Answer:</b> When a weather alert (such as rain or heavy mist) is triggered, the <code>replanningService</code> intercepts the active itinerary, identifies high-risk outdoor stops (e.g., peak trekking or open-air viewpoints), and automatically replaces them with curated indoor alternatives (e.g., Tribal Heritage Museum, Coffee Roasting Workshops, Artisans Guild). "
         "It updates trip timing and activity categories in real-time without breaking user route order."),

        ("Q4: How do you prevent over-crowded tourist traps from dominating recommendations?",
         "PRODUCT DESIGN",
         "<b>Answer:</b> RoamIQ highlights dedicated <b>Hidden Gems</b> and authentic local experiences alongside major attractions. "
         "Every destination object contains verified hidden spots (with exact distance, crowd status, and cost) and local market guides. "
         "Furthermore, the crowd density score penalizes heavily congested spots during peak hours in the Travel Intelligence Dashboard."),

        ("Q5: What safety mechanisms are built in for solo or first-time travelers in India?",
         "SAFETY & RISK",
         "<b>Answer:</b> The <b>Travel Risk Hub</b> provides a multi-layered safety profile including:<br/>"
         "• Risk levels for weather, crowd, road conditions, and scam risk.<br/>"
         "• <b>ScamShield Module:</b> Identifies specific scam triggers (e.g., unauthorized auto meters, fake guide passes) and provides immediate solutions.<br/>"
         "• <b>Tourist Price Guard:</b> Benchmarks expected prices vs observed tourist prices.<br/>"
         "• Verified emergency service contacts (Hospitals, Police, Tourist Helplines) with exact distances."),

        ("Q6: How does the Budget Intelligence module handle group dynamics?",
         "FINANCIAL ENGINE",
         "<b>Answer:</b> The budget service dynamically calculates base costs depending on travel group size (Solo, Couple, Family, Friends). "
         "When a user selects specific hotels or transport options, the budget breakdown instantly recalculates total stay costs, transport fares, food allowances, and shopping estimates, showing remaining budget buffers and personalized savings advice."),

        ("Q7: How is data structured to scale across all 28 States and 8 Union Territories?",
         "SCALABILITY",
         "<b>Answer:</b> Data is normalized under strict TypeScript interfaces (<code>Destination</code>, <code>ItineraryDay</code>, <code>TravelRiskProfile</code>, etc.) in <code>travel.ts</code>. "
         "This schema allows seamless expansion from static JSON database objects to real-time REST/GraphQL API backends or vector database query pipelines without changing UI component logic."),

        ("Q8: How can RoamIQ be monetized in a commercial production environment?",
         "BUSINESS & MONETIZATION",
         "<b>Answer:</b> RoamIQ has three main revenue channels:<br/>"
         "1. <b>Affiliate & Booking Commissions:</b> Partnering with OTAs (MakeMyTrip, Booking.com, redBus, IRCTC) for direct hotel/transport clicks.<br/>"
         "2. <b>Local Experience Marketplace:</b> Charging small listing/booking fees for local artisan workshops, heritage guides, and niche homestays.<br/>"
         "3. <b>SaaS B2B API:</b> Licensing the Adaptive Replanning & ScamShield safety API to travel agencies and corporate trip management tools."),

        ("Q9: What is RoamIQ's competitive moat over standard AI tools like ChatGPT?",
         "COMPETITIVE MOAT",
         "<b>Answer:</b> Generic LLMs produce unstructured text lists without real-time price verification, route distance checks, or adaptive rain guards. "
         "RoamIQ combines structured domain-specific travel data models, interactive route re-ordering, financial tracking, localized translation audio, and automated risk scoring in a single cohesive UI flow."),

        ("Q10: What are the future engineering roadmaps for RoamIQ?",
         "FUTURE ROADMAP",
         "<b>Answer:</b> Future enhancements include:<br/>"
         "• Full integration with live weather APIs (OpenWeatherMap) and flight/train booking APIs.<br/>"
         "• Offline Progressive Web App (PWA) mode for zero-connectivity Himalayan / forest regions.<br/>"
         "• Multi-lingual voice assistant input supporting 12 major Indian languages.")
    ]

    for q_text, tag, answer in qa_list:
        card_content = []
        card_content.append(Paragraph(f"<b>[{tag}]</b>", ParagraphStyle('Tag', fontName='Helvetica-Bold', fontSize=8, textColor=c_accent)))
        card_content.append(Paragraph(q_text, q_title_style))
        card_content.append(Spacer(1, 2))
        card_content.append(Paragraph(answer, body_style))
        card_content.append(Spacer(1, 6))

        t_qa = Table([[card_content]], colWidths=[7.0 * inch])
        t_qa.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), c_bg_light),
            ('BOX', (0,0), (-1,-1), 0.5, c_card_border),
            ('TOPPADDING', (0,0), (-1,-1), 8),
            ('BOTTOMPADDING', (0,0), (-1,-1), 8),
            ('LEFTPADDING', (0,0), (-1,-1), 10),
            ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ]))
        
        story.append(KeepTogether([t_qa, Spacer(1, 8)]))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF successfully generated at: {filename}")

if __name__ == '__main__':
    output_pdf = os.path.join(os.getcwd(), "RoamIQ_Hackathon_TechStack_and_QA_Guide.pdf")
    create_pdf(output_pdf)
