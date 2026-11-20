"""
PDF Generation Script for Raskas Sai Karthik's Resume
Generates an ATS-friendly, clean, selectable-text 1-Page PDF at public/resume.pdf and resume.pdf
"""

import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)

def generate_pdf():
    os.makedirs('public', exist_ok=True)
    targets = ['public/resume.pdf', 'resume.pdf']

    # Palette
    COLOR_PRIMARY = colors.HexColor('#111111')      # Ink black
    COLOR_SECONDARY = colors.HexColor('#333333')    # Charcoal
    COLOR_ACCENT = colors.HexColor('#5EA71B')       # Printable dark lime/olive accent
    COLOR_BORDER = colors.HexColor('#D5D5D5')
    COLOR_MUTED = colors.HexColor('#555555')

    for target in targets:
        doc = SimpleDocTemplate(
            target,
            pagesize=letter,
            leftMargin=30,
            rightMargin=30,
            topMargin=26,
            bottomMargin=26
        )

        styles = getSampleStyleSheet()

        name_style = ParagraphStyle(
            'ResumeName',
            parent=styles['Normal'],
            fontName='Helvetica-Bold',
            fontSize=17,
            leading=20,
            textColor=COLOR_PRIMARY,
            spaceAfter=1
        )

        title_style = ParagraphStyle(
            'ResumeTitle',
            parent=styles['Normal'],
            fontName='Helvetica-Bold',
            fontSize=9.5,
            leading=12,
            textColor=COLOR_SECONDARY,
            spaceAfter=3
        )

        contact_style = ParagraphStyle(
            'ResumeContact',
            parent=styles['Normal'],
            fontName='Helvetica',
            fontSize=8,
            leading=10.5,
            textColor=COLOR_MUTED,
            spaceAfter=4
        )

        section_heading_style = ParagraphStyle(
            'ResumeSectionHeading',
            parent=styles['Normal'],
            fontName='Helvetica-Bold',
            fontSize=9.5,
            leading=12,
            textColor=COLOR_PRIMARY,
            spaceBefore=5,
            spaceAfter=2,
            keepWithNext=True
        )

        item_header_style = ParagraphStyle(
            'ResumeItemHeader',
            parent=styles['Normal'],
            fontName='Helvetica-Bold',
            fontSize=8.5,
            leading=10.5,
            textColor=COLOR_PRIMARY,
            spaceAfter=1
        )

        item_sub_style = ParagraphStyle(
            'ResumeItemSub',
            parent=styles['Normal'],
            fontName='Helvetica-Oblique',
            fontSize=8,
            leading=10,
            textColor=COLOR_SECONDARY,
            spaceAfter=1.5
        )

        body_style = ParagraphStyle(
            'ResumeBody',
            parent=styles['Normal'],
            fontName='Helvetica',
            fontSize=8,
            leading=10.5,
            textColor=COLOR_SECONDARY,
            spaceAfter=1
        )

        bullet_style = ParagraphStyle(
            'ResumeBullet',
            parent=styles['Normal'],
            fontName='Helvetica',
            fontSize=8,
            leading=10.2,
            textColor=COLOR_SECONDARY,
            leftIndent=10,
            firstLineIndent=-6,
            spaceAfter=1
        )

        story = []

        # 1. HEADER
        story.append(Paragraph("RASKAS SAI KARTHIK", name_style))
        story.append(Paragraph("Computer Science Engineering Undergraduate &bull; Systems &amp; Software Builder", title_style))
        
        contact_line = (
            "Hyderabad, Telangana, India &bull; "
            "<b>Email:</b> raskas.saikarthik07@gmail.com &bull; "
            "<b>LinkedIn:</b> linkedin.com/in/raskas-sai-karthik-7b3746378 &bull; "
            "<b>GitHub:</b> github.com/raskassaikarthik07-droid &bull; "
            "<b>Portfolio:</b> raskassaikarthik07-droid.github.io/Portfolio"
        )
        story.append(Paragraph(contact_line, contact_style))
        story.append(HRFlowable(width="100%", thickness=1.2, color=COLOR_ACCENT, spaceAfter=4))

        # 2. PROFESSIONAL SUMMARY
        story.append(Paragraph("SUMMARY", section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.5, color=COLOR_BORDER, spaceAfter=2.5))
        summary_text = (
            "Performance-driven Computer Science Engineering undergraduate at KL University, Hyderabad (Roll No: 2510030295). "
            "Hands-on experience developing full-stack web platforms, browser-based computer vision kinematics, and deterministic "
            "pure Java object-oriented data structures. Proven academic record with 89% in Intermediate (MPC) and a 9.7/10 GPA in SSC. "
            "Seeking Summer 2025/2026 Software Engineering and Distributed Systems Internships."
        )
        story.append(Paragraph(summary_text, body_style))

        # 3. EDUCATION
        story.append(Paragraph("EDUCATION", section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.5, color=COLOR_BORDER, spaceAfter=2.5))

        # KL University
        story.append(Paragraph("<b>KL University (Koneru Lakshmaiah Education Foundation)</b> &mdash; Hyderabad, India", item_header_style))
        story.append(Paragraph("Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering &bull; <i>ID: 2510030295</i> <font color='#666666'>| Jun 2025 &ndash; Present</font>", item_sub_style))
        story.append(Paragraph("&bull; <b>Relevant Coursework:</b> Data Structures &amp; Algorithms, Object-Oriented Programming (Java), Relational &amp; Vector Databases, Operating Systems, IoT &amp; Microcontrollers.", bullet_style))

        # Narayana
        story.append(Paragraph("<b>Narayana Junior College</b> &mdash; Hyderabad, India", item_header_style))
        story.append(Paragraph("Board of Intermediate Education (MPC) &bull; <b>Academic Distinction: 89%</b> <font color='#666666'>| 2023 &ndash; 2025</font>", item_sub_style))
        story.append(Paragraph("&bull; Rigorous training in higher Mathematics (Calculus, Linear Algebra), Physics, and Chemistry quantitative problem-solving.", bullet_style))

        # Little Flower
        story.append(Paragraph("<b>Little Flower High School</b> &mdash; Hyderabad, India", item_header_style))
        story.append(Paragraph("Secondary School Certificate (SSC) &bull; <b>Grade: 9.7 / 10 GPA (97%)</b> <font color='#666666'>| 2013 &ndash; 2023</font>", item_sub_style))

        # 4. TECHNICAL SKILLS
        story.append(Paragraph("TECHNICAL SKILLS", section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.5, color=COLOR_BORDER, spaceAfter=2.5))

        skills_data = [
            [Paragraph("<b>Programming Languages:</b>", body_style), Paragraph("Java SE / OOP, Python, C / C++, TypeScript, JavaScript (ES6+), SQL", body_style)],
            [Paragraph("<b>Web &amp; Frontend:</b>", body_style), Paragraph("React 19, Next.js, Tailwind CSS, HTML5 Canvas API, RESTful API Design, FastAPI", body_style)],
            [Paragraph("<b>Systems &amp; Databases:</b>", body_style), Paragraph("Custom Data Structures (LinkedList, Stack, Queue), MySQL, PostgreSQL, Vector Databases", body_style)],
            [Paragraph("<b>Tools &amp; Platforms:</b>", body_style), Paragraph("Git, GitHub Pages, Linux / Bash CLI, Docker Basics, Vercel CI/CD, VS Code, Eclipse", body_style)],
            [Paragraph("<b>Hardware &amp; IoT:</b>", body_style), Paragraph("Arduino IDE, ESP32 Microcontrollers, Sensor Interfacing, Serial Protocols (UART, SPI)", body_style)]
        ]

        skills_table = Table(skills_data, colWidths=[120, 432])
        skills_table.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 0.5),
            ('TOPPADDING', (0, 0), (-1, -1), 0.5),
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ]))
        story.append(skills_table)

        # 5. VERIFIED ENGINEERING PROJECTS
        story.append(Paragraph("KEY ENGINEERING PROJECTS", section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.5, color=COLOR_BORDER, spaceAfter=2.5))

        # Project 1: MovieRecommend
        story.append(Paragraph("<b>MovieRecommend Platform</b> &bull; <i>TypeScript, React, Next.js, Tailwind CSS, Vercel</i> <font color='#666666'>| movierecommend-pi.vercel.app</font>", item_header_style))
        story.append(Paragraph("&bull; Built an AI-assisted movie curation engine with instant genre clustering and debounced search, achieving sub-100ms client query latency.", bullet_style))

        # Project 2: Structviz
        story.append(Paragraph("<b>Structviz (Interactive Data Structures Visualizer)</b> &bull; <i>JavaScript, HTML5 Canvas, GitHub Pages</i> <font color='#666666'>| raskassaikarthik07-droid.github.io/Structviz/</font>", item_header_style))
        story.append(Paragraph("&bull; Engineered an educational visualizer rendering 60fps animations of LIFO stacks, queues, and linked node insertions with frame-by-frame controls.", bullet_style))

        # Project 3: RehabVision Physio
        story.append(Paragraph("<b>RehabVision Physio</b> &bull; <i>TypeScript, Computer Vision Models, Kinematics, GitHub Pages</i> <font color='#666666'>| raskassaikarthik07-droid.github.io/Rehabvision_physio/</font>", item_header_style))
        story.append(Paragraph("&bull; Developed an in-browser movement tracker computing joint angle vectors at 30+ fps with a minimal HUD showing posture deviation thresholds.", bullet_style))

        # Project 4: Space Mission Control
        story.append(Paragraph("<b>Space Mission Control</b> &bull; <i>Java SE, Custom Linked Lists, Emergency Stacks, Mission Queues</i> <font color='#666666'>| github.com/raskassaikarthik07-droid/Space-mission-control</font>", item_header_style))
        story.append(Paragraph("&bull; Implemented zero-dependency two-pointer Linked Lists and LIFO abort stacks in pure Java, passing 100% of telemetry stress-test scenarios.", bullet_style))

        # Project 5: SkyBook Flight Booking
        story.append(Paragraph("<b>SkyBook Commercial Flight Booking</b> &bull; <i>React 19, Tailwind CSS v4, Amadeus API</i> <font color='#666666'>| github.com/raskassaikarthik07-droid/flight</font>", item_header_style))
        story.append(Paragraph("&bull; Integrated Amadeus Flight API with multi-leg route parsing, interactive SVG aircraft seat maps, and digital boarding pass generation.", bullet_style))

        # Project 6: GreenLeaf Botanical Store
        story.append(Paragraph("<b>GreenLeaf Botanical Store</b> &bull; <i>JavaScript, CSS3 Grid, LocalStorage, GitHub Pages</i> <font color='#666666'>| raskassaikarthik07-droid.github.io/plants/</font>", item_header_style))
        story.append(Paragraph("&bull; Engineered responsive botanical plant retail storefront with event-driven cart arithmetic and mobile-first drawer navigation.", bullet_style))

        # 6. CERTIFICATIONS & HONORS
        story.append(Paragraph("CERTIFICATIONS &amp; ACADEMIC HONORS", section_heading_style))
        story.append(HRFlowable(width="100%", thickness=0.5, color=COLOR_BORDER, spaceAfter=2.5))
        story.append(Paragraph("&bull; <b>AI / ML Virtual Internship &amp; Systems Certification:</b> Industry Virtual Internship Program (2025, Grade: Excellent).", bullet_style))
        story.append(Paragraph("&bull; <b>Academic Distinction:</b> 89% in Intermediate Board Examination (MPC) &bull; 9.7/10 GPA in Secondary School Certificate (SSC).", bullet_style))
        story.append(Paragraph("&bull; <b>Verified Engineering Codebases:</b> 6 public repositories on GitHub spanning systems engineering, web apps, and computer vision.", bullet_style))

        doc.build(story)
        print(f"Generated clean 1-Page ATS resume PDF at: {target} ({os.path.getsize(target)} bytes)")

if __name__ == '__main__':
    generate_pdf()
