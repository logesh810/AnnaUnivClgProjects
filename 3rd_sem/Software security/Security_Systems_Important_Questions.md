
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
Detailed steps of identifying assets, threats, countermeasures.

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
