
# DMC8302 – SECURITY SYSTEMS
**Important 2 Marks, 13 Marks, and 15 Marks Questions with Answers**

---

## Table of Contents
- Unit I - Low Level Attacks
- Unit II - Secure Design
- Unit III - Security Risk Management
- Unit IV - Security Testing
- Unit V - Penetration Testing

---

# UNIT I - LOW LEVEL ATTACKS

## 2 Mark Questions

### 1. What are Memory Based Attacks?
Memory-based attacks exploit vulnerabilities in the way memory is managed, often causing unauthorized access, corruption, or code execution.

### 2. Define Stack Smashing.
Stack smashing is a buffer overflow attack that overwrites the call stack with malicious data, potentially leading to code execution.

### 3. What is Return Oriented Programming (ROP)?
ROP is an attack technique that uses existing executable code snippets to perform malicious actions without injecting new code.

### 4. What is ASLR (Address Space Layout Randomization)?
ASLR is a security technique that randomizes memory addresses to make it difficult for attackers to predict the location of processes.

## 13 Mark Questions

### 5. Explain different types of Memory Based Attacks with examples.
- Heap and Stack Attacks
- Format String Attacks
- Stale Memory Access
Examples: Heap Overflow in web servers, Stack Smashing via strcpy()

### 6. Discuss the defense mechanisms against low-level attacks.
- Stack Canaries
- ASLR
- Control-Flow Integrity (CFI)
- Non-Executable Data (NX)

## 15 Mark Question

### 7. Analyze different memory attack mitigation techniques like Stack Canaries, ASLR, and CFI with examples.
Details with examples from Linux/Windows memory defenses.

---

# UNIT II - SECURE DESIGN

## 2 Mark Questions

### 1. What is Stack Inspection?
Stack inspection is a technique to check permission origin before executing sensitive operations.

### 2. Define Buffer Overflow.
Overflowing buffer memory to overwrite adjacent memory and cause vulnerabilities.

### 3. What is SQL Injection?
Manipulating SQL queries via user input fields.

### 4. What is Threat Modeling?
Analyzing and mitigating threats during system design.

## 13 Mark Questions

### 5. Explain the different types of code injection attacks.
- SQL Injection
- Code Injection
- Network Fault Injection

### 6. Describe Secure Design Principles with examples.
- Least Privilege
- Fail-Safe Defaults
- Defense in Depth
- Separation of Duties

### Components of DiD
1. Physical Security: Secure access to data centers with biometric authentication and
surveillance systems.
2. Network Security: Use of firewalls, intrusion detection systems (IDS), and VPNs to
prevent unauthorized access.
3. Application Security: Implement input validation, secure coding practices, and regular
security testing.
4. Data Security: Encrypt sensitive data in transit and at rest using robust encryption
algorithms

## 15 Mark Question

### 7. Discuss Threat Modeling and Security Design with examples.
Threat modeling and security design are crucial for creating secure systems. Threat modeling involves identifying potential threats and vulnerabilities, while security design focuses on implementing security measures to mitigate those threats. A structured approach, including asset identification, threat analysis, vulnerability assessment, and countermeasure development, is essential for effective threat modeling and security design. [1, 2, 3]  
1. Threat Modeling Process [2, 2, 4, 4]  

• Identify Assets: Determine which assets (data, systems, applications) require protection and what their value is. For example, in a financial system, customer data and transaction records are high-value assets. [2, 2, 4, 4, 5, 6, 7, 8]  
• Identify Threats: Analyze potential threats to the identified assets, considering the attacker's motivations, capabilities, and available opportunities. Examples of threats include: [2, 2, 4, 4, 9, 9]  
	• Data Breaches: Unauthorized access to sensitive customer data in a financial system. [9, 9]  
	• Malware: Infection of a web application by malware, potentially leading to data theft or system compromise. [9, 9, 10, 11, 12]  
	• Brute Force Attacks: Repeated attempts to guess user credentials, potentially compromising accounts. [3, 3, 13, 14]  

• Vulnerability Assessment: Identify vulnerabilities within the system's architecture, design, and implementation that could be exploited by the identified threats. For example, a poorly secured database could be vulnerable to SQL injection attacks. [2, 2, 4, 4, 15, 16]  
• Attack Simulation: Simulate attacks to assess the potential impact of identified vulnerabilities and threats. [2, 2, 17]  
• Risk Analysis: Evaluate the likelihood and impact of each threat, prioritizing those with the highest potential risk. [2, 2, 18, 18]  
• Develop Countermeasures: Design and implement security controls to mitigate identified threats and vulnerabilities. Examples of countermeasures include: [3, 9, 9, 19]  
	• Firewalls: Block unauthorized access to the network. [9, 9, 20, 21]  
	• Antivirus Software: Protect against malware infections. [9, 9]  
	• Encryption: Protect sensitive data during transit and at rest. [9, 9, 22, 23]  
	• Access Control: Limit access to sensitive resources based on user roles and permissions. [9, 9, 24]  
	• Input Validation: Prevent malicious input from being processed by applications. [2, 2, 25, 26]  

2. Security Design [2, 2, 3, 3]  
Security design involves implementing the countermeasures identified during threat modeling to create a secure system. It's an ongoing process that evolves as the system and threat landscape change. Key aspects of security design include: [1, 2, 2, 3, 3, 18, 18, 27, 27, 28, 29, 30, 31]  

• Principle of Least Privilege: Grant users and applications only the minimum necessary access to perform their functions. [18, 18, 32, 33]  
• Defense in Depth: Implement multiple layers of security controls to protect against attacks, ensuring that if one layer fails, others are still in place. [18, 18, 34, 35, 36]  
• Secure Configuration: Configure systems and applications securely, following best practices and guidelines. [18, 18, 37, 38]  
• Regular Auditing and Monitoring: Monitor systems for suspicious activity and regularly audit security controls to ensure they remain effective. [27, 39, 40]  
• Incident Response Plan: Develop a plan for responding to security incidents, including steps for containment, eradication, and recovery. [27, 27, 41, 42, 43, 44, 45]  

3. Examples [2, 2]  

• E-commerce Website: 
	• Assets: Customer data, payment information, product inventory. 
	• Threats: Data breaches, phishing attacks, malware. 
	• Countermeasures: Encryption, firewalls, intrusion detection systems, strong password policies, secure payment gateways. 

• Banking Application: 
	• Assets: Customer accounts, financial transactions, sensitive data. 
	• Threats: Data breaches, malware, phishing attacks, insider threats. 
	• Countermeasures: Encryption, two-factor authentication, intrusion detection systems, access control, strong password policies, insider threat detection. 

• Smart Home System: 
	• Assets: Security cameras, smart locks, home automation devices. 
	• Threats: Remote hacking, unauthorized access, malware. 
	• Countermeasures: Strong passwords, secure network configuration, intrusion detection systems, encryption, regular updates. [2, 2, 9, 9, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]  

4. Tools and Frameworks [58, 58]  

• OWASP Threat Dragon: An open-source threat modeling tool that helps identify and visualize threats. [58, 58]  
• STRIDE: A threat modeling framework that helps identify potential threats to an application by considering six types of attacks: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege. [3, 4, 4, 9, 59, 60, 61]  

AI responses may include mistakes.

[1] https://jdmeier.com/how-to-use-threat-modeling/[2] https://www.imperva.com/learn/application-security/threat-modeling/[3] https://www.securitycompass.com/blog/what-is-threat-modeling/[4] https://www.infosecinstitute.com/resources/management-compliance-auditing/6-key-elements-of-a-threat-model/[5] https://www.linkedin.com/pulse/mastering-threat-modeling-risk-assessment-beginners-guide-adewole-gw8wf[6] https://www.linkedin.com/pulse/building-cyber-resilience-why-threat-modeling-your-7-trlic[7] https://www.cutter.com/article/building-effective-digital-defense-504816[8] https://designingsecuresoftware.com/preview_fulltext/dss02/[9] https://foundershield.com/insurance-terms/definition/security-threats/[10] https://www.ntt-review.jp/archive/ntttechnical.php?contents=ntr201210fa2.html[11] https://link.springer.com/chapter/10.1007/979-8-8688-0506-6_10[12] https://library.fiveable.me/advanced-computer-architecture/unit-15[13] https://arcticwolf.com/resources/blog/top-identity-threats-facing-your-organization/[14] https://qualysec.com/top-10-latest-security-threats-in-e-commerce-and-their-solutions/[15] https://owasp.org/www-community/Threat_Modeling_Process[16] https://www.dnv.com/cyber/services/prepare-prevent/[17] https://www.sciencedirect.com/science/article/pii/S1874548224000416[18] https://www.techtarget.com/searchsecurity/definition/threat-modeling[19] https://owasp.org/www-community/Threat_Modeling[20] https://www.twingate.com/blog/glossary/countermeasure[21] https://www.zenarmor.com/docs/network-security-tutorials/what-is-business-network-security[22] https://www.captechu.edu/blog/building-robust-cybersecurity-strategy-steps-considerations-and-best-practices-businesses[23] https://hexaviewtech.com/blog/how-ai-and-big-data-pose-a-threat-to-data-privacy-and-security[24] https://www.sentinelone.com/cybersecurity-101/endpoint-security/business-endpoint-protection/[25] https://jdmeier.com/threat-modeling-terms-and-how-to-use-them/[26] https://www.pynt.io/learning-hub/application-security/10-application-security-vulnerabilities-and-how-to-mitigate-them[27] https://github.com/jassics/security-study-plan/blob/main/threat-modeling-study-plan.md[28] https://kravensecurity.com/what-is-threat-modeling/[29] https://investigativeacademy.com/security-design-an-introductory-guide-for-security-professionals/[30] https://www.cloudskillsboost.google/paths/2150/course_templates/1199/video/522021?locale=ar[31] https://www.securitymagazine.com/articles/90210-physical-and-cyber-convergenceat-last[32] https://medium.com/@kavib/what-is-secure-by-design-c407e1fcdc38[33] https://www.linkedin.com/advice/3/what-most-effective-security-controls-implement-0rxve[34] https://www.linkedin.com/pulse/security-design-digialert[35] https://investigativeacademy.com/security-design-an-introductory-guide-for-security-professionals/[36] https://cmitsolutions.com/blog/multi-layered-security/[37] https://www.isms.online/iso-27701/clause-6-11-2-security-in-development-and-support-processes/[38] https://www.linkedin.com/advice/0/how-do-you-design-secure-architecture[39] https://www.netwrix.com/download/Compliance/Internaldocuments/Netwrix%20Threat%20Prevention%20and%20CMMC%202.0.pdf[40] https://dig8ital.com/post/real-time-threat-monitor-2/[41] https://link.springer.com/chapter/10.1007/978-981-97-0052-3_20[42] https://ecampusontario.pressbooks.pub/auditinginformationsystems/chapter/0505/[43] https://malisko.com/industrial-control-system-security-best-practices/[44] https://spycloud.com/glossary/threat-actors/[45] https://www.ek.co/publications/how-to-build-your-global-security-centre-operations-strategy/[46] https://perception-point.io/guides/zero-trust/zero-trust-model-principles-challenges-and-a-real-life-example/[47] https://www.wallarm.com/what/secure-design[48] https://www.linkedin.com/pulse/safety-vs-security-critical-infrastructure-design-shiv-kataria-3m4jc[49] https://fidelissecurity.com/threatgeek/active-directory-security/active-directory-best-practices/[50] https://link.springer.com/chapter/10.1007/978-3-031-25538-0_4[51] https://thecyphere.com/blog/cyber-security-architecture/[52] https://futuramo.com/blog/top-ten-ways-businesses-can-increase-digital-security/[53] https://www.scirp.org/journal/paperinformation?paperid=65825[54] https://sting.ca/en/blogue/the-complete-guide-to-commercial-security-systems/[55] https://surelockkey.com/blog/safeguarding-smart-locks-understanding-cybersecurity-threats-in-2025/[56] https://www.bdo.be/getmedia/db39b50d-cb5b-4060-8058-0cf459162c7b/210429_BDO_Magazine_April_Steekkaart_ENG_LRES.pdf.aspx?ext=.pdf[57] https://www.iasgyan.in/daily-current-affairs/scattered-spiders[58] https://www.comparitech.com/net-admin/threat-modeling-guide/[59] https://www.toreon.com/threat-modeling-in-4-steps/[60] https://threat-modeling.com/stride-threat-modeling/[61] https://ranjaniitian.medium.com/threat-modeling-in-devsecops-enhancing-application-security-132bc424938
Not all images can be exported from Search.


---

# UNIT III - SECURITY RISK MANAGEMENT

## 2 Mark Questions

### 1. What is Risk Profiling?
Identifying types and severity of risks.

### 2. Define Risk Exposure.
Extent of potential losses from risks.

### 3. What is Risk Mitigation?
Steps taken to reduce risk impacts.

### 4. What is Threat Management?
Practice of identifying and minimizing threats.

## 13 Mark Questions

### 5. Explain the Risk Management Life Cycle.
Steps: Identify → Analyze → Evaluate → Treat → Monitor

### 6. Discuss Threat and Vulnerability Management.
Managing threats proactively and remediating vulnerabilities.

## 15 Mark Question

### 7. Describe Risk Assessment Techniques with examples.
Using Risk Matrix, FMEA, Qualitative and Quantitative risk analysis.

---

# UNIT IV - SECURITY TESTING

## 2 Mark Questions

### 1. What is Secure Software Development Life Cycle (SDLC)?
Embedding security at every stage of software development.

### 2. Define Risk-Based Security Testing.
Prioritizing testing based on potential impacts.

### 3. What is White Box Testing?
Internal code structure is tested.

### 4. What is Black Box Testing?
System tested externally without internal knowledge.

## 13 Mark Questions

### 5. Explain traditional software testing vs secure software testing.
Functionality vs Security vulnerability detection.

### 6. Describe White Box, Grey Box, and Black Box Testing.
Testing models based on visibility into system code.

## 15 Mark Question

### 7. Discuss Prioritizing Security Testing using Threat Modeling.
Using threat modeling to focus testing efforts.

---

# UNIT V - PENETRATION TESTING

## 2 Mark Questions

### 1. What is Penetration Testing?
Simulated cyberattack to evaluate system security.

### 2. Define Enumeration.
Information gathering phase of penetration testing.

### 3. What is Remote Exploitation?
Exploiting vulnerabilities over a network.

### 4. What is DNS Groper?
Tool for DNS reconnaissance.

## 13 Mark Questions

### 5. Explain Planning and Scoping in Penetration Testing.
Planning objectives, scope, and legal considerations.

### 6. Discuss Web Application Exploitation Techniques.
Attacks like SQLi, XSS, CSRF, with exploitation tools.

## 15 Mark Question

### 7. Describe Post Exploitation, Bypassing Firewalls, and Tools used for Penetration Testing.
Post exploitation activities, evading defenses, important pen-test tools.
