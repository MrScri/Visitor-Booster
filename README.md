
# **Visitor Booster**

**A Node.js script to boost visits using Tor and random User-Agents.**  
This script utilizes modern techniques to increase website interaction effectively and securely by using the Tor proxy to change the IP address with each visit. Additionally, it generates a random User-Agent for each request to further mimic real user behavior.

### **وصف السكربت**:
السكربت يستخدم شبكة Tor لتغيير عنوان الـ IP الخاص بك في كل زيارة للموقع المستهدف. السكربت يرسل طلبات GET بشكل دوري للموقع مع **User-Agent** عشوائي يتم توليده لكل زيارة. كما يقوم السكربت بعرض عنوان IP الذي تم استخدامه في كل زيارة عبر **Tor**. 

### **How it works**:
1. **Axios** is used for sending HTTP requests.
2. **SocksProxyAgent** is used to route requests through Tor’s SOCKS5 proxy.
3. **User-Agent** is randomly generated for each request using the **user-agents** library.

The script continuously sends requests to the specified website URL every 3 seconds and displays the success or failure status for each request.

---

### **How to use:**

1. **Install dependencies** using `npm install`:
   ```bash
   npm install
   ```

2. **Run the script** using `node VisitorBooster.js`:
   ```bash
   node VisitorBooster.js
   ```

3. **Enter the website URL** when prompted.

---

### **File Requirements**:
- **Node.js** should be installed on your system.
- **Tor** should be running and configured to listen on `socks5://127.0.0.1:9050`.

---

### **Script Breakdown**:

- **`axios`**: This module is used to send HTTP requests to the target URL.
- **`socks-proxy-agent`**: Routes the HTTP requests through the Tor network.
- **`user-agents`**: Randomly generates a new **User-Agent** for each HTTP request, simulating different browsers and devices.

---

### **Sample Output**:

```
🚀 Starting to increase visits via Tor ...
Selected URL: https://example.com
✅ Successful visit (1) / Total: 1
🕵️‍♂️ The IP address used via Tor: 192.168.1.1
❌ Visit failed (1) / Total: 2 — Error message
```

---

### **Important Notes**:
- The script uses Tor to change the IP address for each request, ensuring privacy and anonymity.
- Ensure that Tor is running on your machine at the default SOCKS5 proxy (`127.0.0.1:9050`).
- The script attempts to send requests at regular intervals (3 seconds by default), so be mindful of the frequency of requests to avoid potential issues with the target website.

---

### **How to Download the Script:**

#### 1. **Direct Download**:
You can download the script as a `.zip` file from GitHub:
- [Download ZIP](https://github.com/MrScri/Visitor-Booster/archive/refs/heads/main.zip)

#### 2. **Clone via Git**:
If you prefer to clone the repository using Git, use the following command:
```bash
git clone https://github.com/MrScri/Visitor-Booster.git
```

---

### **License**:
This script is provided for educational purposes. Use it responsibly and ensure you comply with all legal requirements and terms of service for the websites you target.
