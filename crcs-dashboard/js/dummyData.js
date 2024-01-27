const dummyData = [
    {
      societyName: "Saharayn Universal Multipurpose Society Limited",
      societyAddress: "At & P.O. Railway Colony, Gorakkhpur, District-Gorakhpur Uttar Pradesh",
      state: "UTTAR PRADESH",
      district: "KUSHI NAGAR",
      dateOfRegistration: "",
      areaOfOperation: "Haryana, Uttar Pradesh, Himachal, Punjab",
      sectorType: "Credit"
    },
    {
      societyName: "JMJ Multi State Agro Cooperative Society Ltd.",
      societyAddress: "TC 48/1442-1, Sreeniva, Parekkati House, Chathankulangara Temple South, Puthurkkara, Ayyanthole, Thrissur 680003 Kerala",
      state: "KERALA",
      district: "",
      dateOfRegistration: "13-10-2022",
      areaOfOperation: "Bihar, West Bengal, Odisha",
      sectorType: "Agro"
    },
    {
      societyName: "Devbhoomi Agro Multi State Cooperative Society Ltd.",
      societyAddress: "S/o Sateesh Kumar, Tejupur, Haridwar, Uttarakhand 247661",
      state: "UTTARAKHAND",
      district: "",
      dateOfRegistration: "04-10-2022",
      areaOfOperation: "Tamil Nadu, Karnataka",
      sectorType: "Agro"
    },
    {
      societyName: "Aarya Multi Specialty Cooperative Hospital and Hospital and Research Center Ltd.",
      societyAddress: "Gate No 165, Nimgaon (T), Madha, Solapur, 413210 Maharashtra",
      state: "MAHARASHTRA",
      district: "",
      dateOfRegistration: "04-10-2022",
      areaOfOperation: "Haryana, Punjab",
      sectorType: "Health/Hospital"
    },
    {
      societyName: "Agriculture Development Cooperative Federation",
      societyAddress: "A/P 344, Lower Ground Floor, Sector 86, Preet City, SAS Nagar, Mohali, Punjab 160055",
      state: "PUNJAB",
      district: "",
      dateOfRegistration: "22-09-2022",
      areaOfOperation: "Manipur, Meghalaya",
      sectorType: "Federation"
    },
    {
      societyName: "Prosperity Multi State Housing Cooperative Society Ltd.",
      societyAddress: "Jayem Arcade 385 A6, First Floor, Kamarajar Road, Peelamedu, Coimbatore 641004",
      state: "TAMIL NADU",
      district: "",
      dateOfRegistration: "15-09-2022",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Housing"
    },
    {
      societyName: "Greenfield Multi State Agro Allied and Marketing Cooperative Society Ltd. (GMAAMCS)",
      societyAddress: "Plot No 92, H.No 4-487, New Balaji Nagar Colony, Meerpet, Behind Janapriya Apartments, Hyderabad 500097 Telangana",
      state: "TELANGANA",
      district: "",
      dateOfRegistration: "12-09-2022",
      areaOfOperation: "Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Shri Sharda Agro Multi State Co-operative Society Ltd.",
      societyAddress: "Shri Sharda Agro Multi State Co-operative Society Ltd.",
      state: "UTTAR PRADESH",
      district: "",
      dateOfRegistration: "02-09-2022",
      areaOfOperation: "Maharashtra, Goa, Karnataka, Andhra Pradesh",
      sectorType: "Agro"
    },
    {
      societyName: "Nature Delight Multi State Cooperative Dairy & Agro Products Ltd.",
      societyAddress: "Kalas Gate, No 1189, A/P Kalas, Indapur, Pune 413105 Maharashtra",
      state: "MAHARASHTRA",
      district: "",
      dateOfRegistration: "31-08-2022",
      areaOfOperation: "Andhra Pradesh, Telangana",
      sectorType: "Agro"
    },
    {
      societyName: "Travancore Cochin Tourism Cooperative Society Ltd",
      societyAddress: "Idukki, Kerala 685584",
      state: "KERALA",
      district: "IDUKKI",
      dateOfRegistration: "31-08-2022",
      areaOfOperation: "Madhya Pradesh, Chhattisgarh, Jharkhand, Bihar",
      sectorType: "Tourism"
    },
    {
      societyName: "Janamaitheri Agricultural Cooperative Society Ltd.",
      societyAddress: "Janamaitheri Agricultural Cooperative Society Ltd.",
      state: "KERALA",
      district: "THIRUVANANTHAPURAM",
      dateOfRegistration: "16-08-2022",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Swaraj Multipurpose Federation of Cooperative Society Ltd",
      societyAddress: "Shop No 2, Yadav Market, Opposite Radha Ballav mandir, Palla Chowk, Tilak Road, Faridabad 121001 Haryana",
      state: "HARYANA",
      district: "",
      dateOfRegistration: "16-08-2022",
      areaOfOperation: "Gujarat, Rajasthan",
      sectorType: "Federation"
    },
    {
      societyName: "Green Safe Multi State Agriculture Cooperative Society Ltd.",
      societyAddress: "Coimbatore, Tamil Nadu",
      state: "TAMIL NADU",
      district: "COIMBATORE",
      dateOfRegistration: "12-08-2022",
      areaOfOperation: "Haryana, Delhi",
      sectorType: "Agro"
    },
    {
      societyName: "Mango Growers Cooperative Society Ltd. (MANCO)",
      societyAddress: "Visakhapatnam, ANDHRA PRADESH",
      state: "ANDHRA PRADESH",
      district: "VISAKHAPATNAM",
      dateOfRegistration: "10-08-2022",
      areaOfOperation: "Haryana, Delhi, Uttar Pradesh",
      sectorType: "Agro"
    },
    {
      societyName: "Srijan Krishi Vipnan Multi State Cooperative Society Ltd.",
      societyAddress: "Lucknow, UTTAR PRADESH",
      state: "UTTAR PRADESH",
      district: "LUCKNOW",
      dateOfRegistration: "29-07-2022",
      areaOfOperation: "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
      sectorType: "Agro"
    },
    {
      societyName: "Kamal Multispeciality Cooperative Hospital & Research Center Ltd.",
      societyAddress: "Beed Maharashtra, MAHARASHTRA",
      state: "MAHARASHTRA",
      district: "BEED",
      dateOfRegistration: "22-07-2022",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Health/Hospital"
    },
    {
      societyName: "Nagebaba Multi Specialty Cooperative Hospital and Research Center Ltd.",
      societyAddress: "Ahmednagar, MAHARASHTRA",
      state: "MAHARASHTRA",
      district: "AHMEDNAGAR",
      dateOfRegistration: "24-06-2022",
      areaOfOperation: "Haryana, Punjab, Rajasthan",
      sectorType: "Health/Hospital"
    },
    {
      societyName: "The Urban Care Multi State Agro Cooperative Society Ltd.",
      societyAddress: "Kerala, KERALA",
      state: "KERALA",
      district: "KOZHIKODE",
      dateOfRegistration: "27-06-2022",
      areaOfOperation: "Haryana, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Bharathikerkar Fishermen Cooperative Ltd. (BHARATHIKERKAR)",
      societyAddress: "Kerala, KERALA",
      state: "KERALA",
      district: "THRISSUR",
      dateOfRegistration: "27-06-2022",
      areaOfOperation: "Gujarat, Rajasthan, Haryana, Delhi",
      sectorType: "Fisheries"
    },
    {
      societyName: "Swayam Samruddhi Multi State Cooperative Society Ltd.",
      societyAddress: "Hyderabad, Telangana",
      state: "TELANGANA",
      district: "HYDERABAD",
      dateOfRegistration: "15-06-2022",
      areaOfOperation: "Kerala, Karnataka, Maharashtra, Gujarat",
      sectorType: "Agro"
    },
    {
      societyName: "Shree Sai Seva Multi Specialty Cooperative Hospital and Research center ltd",
      societyAddress: "Ahmednagar, Maharashtra",
      state: "MAHARASHTRA",
      district: "AHMEDNAGAR",
      dateOfRegistration: "15-06-2022",
      areaOfOperation: "Maharashtra, Karnataka, Tamil Nadu",
      sectorType: "Health/Hospital"
    },
    {
      societyName: "Venkateshwara Multi State Multi Specialty Hospital and Research Ltd.",
      societyAddress: "Maharashtra, MAHARASHTRA",
      state: "MAHARASHTRA",
      district: "NASIK",
      dateOfRegistration: "08-06-2022",
      areaOfOperation: "Haryana, Gujarat, Maharashtra, Delhi",
      sectorType: "Health/Hospital"
    },
    {
      societyName: "Bharathimanass labour and Construction Cooperative Ltd.",
      societyAddress: "Manipur, MANIPUR",
      state: "MANIPUR",
      district: "BISHNUPUR",
      dateOfRegistration: "06-06-2022",
      areaOfOperation: "West Bengal, Andhra Pradesh",
      sectorType: "Construction"
    },
    {
      societyName: "Kairali Agriculture Multi State Cooperative Society Ltd.",
      societyAddress: "Kerala, KERALA",
      state: "KERALA",
      district: "THRISSUR",
      dateOfRegistration: "06-06-2022",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Golden 24 Care Multi State Cooperative Society Ltd.",
      societyAddress: "Kerala, KERALA",
      state: "KERALA",
      district: "ERNAKULAM",
      dateOfRegistration: "06-06-2022",
      areaOfOperation: "Maharashtra, Gujarat, Tamil Nadu",
      sectorType: "Health/Hospital"
    },
    {
      societyName: "Jewan Kothi Multi State Agro Cooperative Society Ltd.",
      societyAddress: "Uttar Pradesh, UTTAR PRADESH",
      state: "UTTAR PRADESH",
      district: "BASTI",
      dateOfRegistration: "06-06-2022",
      areaOfOperation: "Haryana, UttarPradesh, Himachal, Punjab",
      sectorType: "Agro"
    },
    {
      societyName: "Bharathimanass Agriculture Cooperative Ltd. (BHARATHIMANAS)",
      societyAddress: "Manipur, MANIPUR",
      state: "MANIPUR",
      district: "BISHNUPUR",
      dateOfRegistration: "03-06-2022",
      areaOfOperation: "Bihar, West bengal, Odisha",
      sectorType: "Agro"
    },
    {
      societyName: "Youth Employability Skill Training Cooperative Educational Society Ltd.",
      societyAddress: "PATHANAMTHITTA, KERALA",
      state: "KERALA",
      district: "ERNAKULAM",
      dateOfRegistration: "02-06-2022",
      areaOfOperation: "Tamil Nadu, karnataks",
      sectorType: "Others"
    },
    {
      societyName: "Jai Ratnagarbha Agriculture Multi State Cooperative Society Ltd.",
      societyAddress: "Prayag Raj, uttar Pradesh",
      state: "UTTAR PRADESH",
      district: "BAREILLY",
      dateOfRegistration: "28-05-2022",
      areaOfOperation: "Haryana, Punajb",
      sectorType: "Agro"
    },
    {
      societyName: "Shikharji Multi State Agro Processing and Marketing Cooperative Society Ltd",
      societyAddress: "Buldana, Maharashtra",
      state: "MAHARASHTRA",
      district: "BULDHANA",
      dateOfRegistration: "27-05-2022",
      areaOfOperation: "Manipur, Meghalaya",
      sectorType: "Agro"
    },
    {
      societyName: "News Agriculture Export & Marketing Cooperative society Ltd.",
      societyAddress: "Kalkaji, Delhi",
      state: "NEW DELHI",
      district: "NEW DELHI",
      dateOfRegistration: "21-05-2022",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Krashnadi Multi State Vehicle Services Cooperative Society Ltd.",
      societyAddress: "Beed, maharashtra",
      state: "MAHARASHTRA",
      district: "BEED",
      dateOfRegistration: "12-05-2022",
      areaOfOperation: "Gujarat, Rajasthan",
      sectorType: "Others"
    },
    {
      societyName: "Lotus Multi Specialty Cooperative Hospital and Research Center Ltd.",
      societyAddress: "Osmanabad, Maharashtra",
      state: "MAHARASHTRA",
      district: "BEED",
      dateOfRegistration: "27-04-2022",
      areaOfOperation: "Maharashtra,Goa.Karnataka, Andhra Pradesh",
      sectorType: "Health/Hospital"
    },
    {
      societyName: "Keshavraj Multi Speciality Cooperative Hospital & Research Centre Ltd",
      societyAddress: "Osmanabad, Maharashtra",
      state: "MAHARASHTRA",
      district: "OSMANABAD",
      dateOfRegistration: "27-04-2022",
      areaOfOperation: "Andhra Pradesh, Telangna",
      sectorType: "Health/Hospital"
    },
    {
      societyName: "Keshavraj Multi Speciality Cooperative Hospital & Research Centre Ltd",
      societyAddress: "Kolhaour, Maharashtra",
      state: "MAHARASHTRA",
      district: "KOLHAPUR",
      dateOfRegistration: "27-04-2022",
      areaOfOperation: "Madhya Pradesh, Chhatisgarh, Jharkhan, Bihar",
      sectorType: "Health/Hospital"
    },
    {
      societyName: "Vanashri Cooperative Power & Agro Progressive ltd",
      societyAddress: "Sangli, Maharashtra",
      state: "MAHARASHTRA",
      district: "SANGLI",
      dateOfRegistration: "26-04-2022",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Samrudh Marathwada Multi State Vehicle Services Cooperative Society Ltd.",
      societyAddress: "Beed, maharashtra",
      state: "MAHARASHTRA",
      district: "BEED",
      dateOfRegistration: "20-04-2022",
      areaOfOperation: "Gujarat, Rajasthan",
      sectorType: "Others"
    },
    {
      societyName: "Bharathiyajkl Machuwara Samudaay Cooperative Ltd. (BHARATHIJKLMASACO)",
      societyAddress: "Baramulla, Kashmir",
      state: "JAMMU AND KASHMIR",
      district: "BADGAM",
      dateOfRegistration: "18-04-2022",
      areaOfOperation: "Haryana, Delhi",
      sectorType: "Fisheries"
    },
    {
      societyName: "Prestige Agro Multi State Cooperative Society Ltd",
      societyAddress: "Uttar Pradesh, UTTAR PRADESH",
      state: "UTTAR PRADESH",
      district: "BULANDSHAHR",
      dateOfRegistration: "01-04-2022",
      areaOfOperation: "Haryana, Delhi, UttarPradesh",
      sectorType: "Agro"
    },
    {
      societyName: "Vidhata Hamal Multi State Cooperative Society Ltd",
      societyAddress: "Bhandara, Maharashtra",
      state: "MAHARASHTRA",
      district: "BHANDARA",
      dateOfRegistration: "01-04-2022",
      areaOfOperation: "Uttrakhand, Himachal Pradesh, Jammu & Kashmir",
      sectorType: "Agro"
    },
    {
      societyName: "Dr Appasahed Urf Sa. Re. Patil Jayysinghpur Udgaon Sahakari Bank Ltd",
      societyAddress: "Kolhapur, maharashtra",
      state: "MAHARASHTRA",
      district: "KOLHAPUR",
      dateOfRegistration: "01-04-2022",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "Krushisadhna Mahila Multi State Agro Cooperative society Ltd",
      societyAddress: "Nashik, maharashtra",
      state: "MAHARASHTRA",
      district: "NASIK",
      dateOfRegistration: "01-04-2022",
      areaOfOperation: "Haryana, Punjab, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Seva Sadan Multi Specialty Cooperative Hospital and Research Center Ltd",
      societyAddress: "Gate no. 14, Chaitnya Complex, behind Tahsil karyalaya, Shrigonda Dist - Ahmednagar Pin -413701 (Maharashtra)",
      state: "MAHARASHTRA",
      district: "AHMEDNAGAR",
      dateOfRegistration: "21-03-2022",
      areaOfOperation: "Haryana, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Bulandshahr Agro MultiState cooperative Society Ltd",
      societyAddress: "Mohalla Mahadev, Galimpur Road, Dibai, Bulandshahr, Uttar Pradesh-202393",
      state: "UTTAR PRADESH",
      district: "BULANDSHAHR",
      dateOfRegistration: "21-03-2022",
      areaOfOperation: "Gujarat, Rajasthan, Haryana, Delhi",
      sectorType: "Agro"
    },
    {
      societyName: "B K Dhanlakshmi Multi State Agro Cooperative Society Limited",
      societyAddress: "Mayflower signature, Office 7B, 7th Floor, Avinashi Road, Peelumedu, Coimbatore- 641004, Tamil Nadu",
      state: "TAMIL NADU",
      district: "COIMBATORE",
      dateOfRegistration: "08-03-2022",
      areaOfOperation: "Kerala, karnataka, Maharashtra, Gujarat",
      sectorType: "Agro"
    },
    {
      societyName: "The Walmik Multi State Cooperative Handloom Weavers Cooperative Society Ltd",
      societyAddress: "Plot No 63, Aoodumbae, Gurudev nagar, Nandanavan, Hanuman Nagar, Nagpur 440009, Maharashtra",
      state: "MAHARASHTRA",
      district: "NAGPUR",
      dateOfRegistration: "21-02-2022",
      areaOfOperation: "Maharashtra, Karnataka, Tamil nadu",
      sectorType: "Industrial/Textile"
    },
    {
      societyName: "Ente Naadu Multi State Agro Co-operative Society Ltd.",
      societyAddress: "ST George High School, Aluva- Munnar Road, Kothamangalam, Ernakulam, 686691, Kerala",
      state: "KERALA",
      district: "ERNAKULAM",
      dateOfRegistration: "03-02-2022",
      areaOfOperation: "Haryana, Gujarat, Maharashtra, Delhi",
      sectorType: "Agro"
    },
    {
      societyName: "Rajsidhi Cooperative Cotton & Agro Industries Ltd",
      societyAddress: "Ahmednagar 414401, Maharashtra",
      state: "MAHARASHTRA",
      district: "AHMEDNAGAR",
      dateOfRegistration: "12-01-2022",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Natural Agro Farming Multi State Cooperative Society Ltd.",
      societyAddress: "D77, S/F, East of Kailash, New delhi 110065",
      state: "NEW DELHI",
      district: "NEW DELHI",
      dateOfRegistration: "11-01-2022",
      areaOfOperation: "Haryana, Punjab, Uttar Pradesh",
      sectorType: "Agro"
    },
    {
      societyName: "Samarth Seva Multi State Cooperative Society Limited",
      societyAddress: "Thakur Bada Brij Bhavan Gali, Tehsil-Chhatarpur, Dist. Chhatarpur, Madhya Pradesh-471001",
      state: "MADHYA PRADESH",
      district: "CHHATARPUR",
      dateOfRegistration: "28-12-2021",
      areaOfOperation: "Uttar Pradesh, Rajasthan, Chhatisgarh",
      sectorType: "Others"
    },
    {
      societyName: "Ramchandra Multi Speciality Cooperative Hospital & Research Center Ltd",
      societyAddress: "S.No. 2/2, Near SBI bank, Savakar Colony, Islampur, Walwa, Sangli 415409, Maharashtra",
      state: "MAHARASHTRA",
      district: "SANGLI",
      dateOfRegistration: "10-11-2021",
      areaOfOperation: "Haryana, Uttar Pradesh, Himachal Pradesh, Punjab",
      sectorType: "Health/Hospital"
    },
    {
      societyName: "Mudra Agriculture & Skill Development Multistate Cooperative Society Ltd",
      societyAddress: "15-A, 3-4-757/22, APHB Building Near Raghavendra Swamy Temple Opposite Telangana Grameena Bank, Barkatputra, Hyderabad 500027",
      state: "TELANGANA",
      district: "ADILABAD",
      dateOfRegistration: "12-04-2017",
      areaOfOperation: "Bihar, West Bengal, Odisha",
      sectorType: "Agro"
    },
    {
      societyName: "The Bhuj Mercantile Coop. Bank Ltd",
      societyAddress: "Vyapar Bhawan, Mithakhali 6 Roads, Ahmedabad-380006 (Gujarat)",
      state: "GUJARAT",
      district: "AHMEDABAD",
      dateOfRegistration: "14-09-2021",
      areaOfOperation: "Tamil Nadu, Karnataka",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "Heaven Multi State Agro Cooperative Society Ltd",
      societyAddress: "Kh No 403, Babhani Nagar, Andar, Sominath Nagar, Ward No. 7, Deoria Kasiya Bypass Road, Deoria, Uttar Pradesh 274001",
      state: "UTTAR PRADESH",
      district: "MORADABAD",
      dateOfRegistration: "14-09-2021",
      areaOfOperation: "Haryana, Punjab",
      sectorType: "Agro"
    },
    {
      societyName: "The Sutex Cooperative Bank Ltd",
      societyAddress: "Surjaram, Bachkaniwala Bhawan, Near Navjivan Circle, Udhana Magdalla Road, Surat 395017 Gujarat",
      state: "GUJARAT",
      district: "VALSAD",
      dateOfRegistration: "14-09-2021",
      areaOfOperation: "Manipur, Meghalaya",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "The Navbharat Multi State Agro Farming and Marketing Cooperative Society Ltd",
      societyAddress: "Shop No 112, Floor-I, Sharda Arcade, Paliyad Road, Batod Gujarat",
      state: "GUJARAT",
      district: "BATOD",
      dateOfRegistration: "09-08-2021",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "BharathiMana Fishermen development Cooperative Society ltd. (BHARATHIMANACO)",
      societyAddress: "Kha- Potshangham Maning, Leikai, PO & PS Bishnupur 795126 Manipur",
      state: "MANIPUR",
      district: "BISHNUPUR",
      dateOfRegistration: "06-07-2021",
      areaOfOperation: "Gujarat, Rajasthan",
      sectorType: "Fisheries"
    },
    {
      societyName: "Agrovision Farmer Multi State Cooperative Society Ltd.",
      societyAddress: "H.No 3, Gate No 1, Krishna Colony, Near Universal School, Gorakhpur Kasya Road, Deoria, Uttar Pradesh 274001",
      state: "UTTAR PRADESH",
      district: "DEORIA",
      dateOfRegistration: "27-05-2021",
      areaOfOperation: "Maharashtra, Goa, Karnataka, Andhra Pradesh",
      sectorType: "Agro"
    },
    {
      societyName: "Chitrakoot Multi State Agriculture Marketing Cooperative Society Ltd. (CMAMCS)",
      societyAddress: "H.No 104, Village & Post Sahewa, thana-Girwan, Tehsil Atarra, Banda, Uttar Pradesh 210120",
      state: "UTTAR PRADESH",
      district: "BANDA",
      dateOfRegistration: "29-04-2021",
      areaOfOperation: "Andhra Pradesh, Telangana",
      sectorType: "Agro"
    },
    {
      societyName: "CP Agrotech Multi State Cooperative Society Ltd.",
      societyAddress: "C/O Manoj Kumar, Mohalla-Kannon Goyan, Kasba- Jhinjhana, Jhinjhana Rural, Shamli, Uttar Pradesh 247773",
      state: "UTTAR PRADESH",
      district: "MUZAFFARNAGAR",
      dateOfRegistration: "16-03-2021",
      areaOfOperation: "Madhya Pradesh, Chhattisgarh, Jharkhand, Bihar",
      sectorType: "Agro"
    },
    {
      societyName: "Simplydesi Selfhelp Products, Processing and Marketing Multi State Cooperative Society Ltd",
      societyAddress: "52, Ananda Park Extension, East Punjabi Bagh, New Delhi 110026",
      state: "NEW DELHI",
      district: "NEW DELHI",
      dateOfRegistration: "24-02-2021",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Fisheries"
    },
    {
      societyName: "Bharati North East Fisherman Co-operative Ltd. (BHARATICO)",
      societyAddress: "C/O Swambha Basumatary, near Simlaguri Post Office, Simlaguri, Dhaliagaon, Chirang(BTR), Assam 783381",
      state: "ASSAM",
      district: "CHIRANG",
      dateOfRegistration: "15-02-2021",
      areaOfOperation: "Gujarat, Rajasthan",
      sectorType: "Fisheries"
    },
    {
      societyName: "Chambal Agriculture Marketing Cooperative Ltd",
      societyAddress: "525, rajput Nagar, Bharouli road, Bhind, Madhya Pradesh 477001",
      state: "MADHYA PRADESH",
      district: "BHIND",
      dateOfRegistration: "15-01-2021",
      areaOfOperation: "Haryana, Delhi",
      sectorType: "Marketing"
    },
    {
      societyName: "Sharda Agro Multi State Cooperative Society Ltd",
      societyAddress: "Bhopal, Madhya Pradesh",
      state: "MADHYA PRADESH",
      district: "BHOPAL",
      dateOfRegistration: "14-12-2020",
      areaOfOperation: "Haryana, Delhi, Uttar Pradesh",
      sectorType: "Agro"
    },
    {
      societyName: "N E Railway Cooperative Credit Society Ltd",
      societyAddress: "Chief Workshop Manager Office, NE Railway, Izzatnagar, Bareilly, Uttar Pradesh",
      state: "UTTAR PRADESH",
      district: "BAREILLY",
      dateOfRegistration: "24-11-2020",
      areaOfOperation: "Uttarakhand, Himachal Pradesh, Jammu & Kashmir",
      sectorType: "Credit"
    },
    {
      societyName: "Ramraja Multi state Agro Cooperative Society ltd.",
      societyAddress: "102, Elegant Tower, Royal City, Shivpuri Road, Jhansi, 284003 Uttar Pradesh",
      state: "UTTAR PRADESH",
      district: "JHANSI",
      dateOfRegistration: "12-11-2020",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Vitthal Rao Shinde Sahakari Sahkar Karkhana Ltd",
      societyAddress: "Gangamainagar, Post Pimpalner, Taluka Madha, Solapur, 413210 Maharashtra",
      state: "MAHARASHTRA",
      district: "SOLAPUR",
      dateOfRegistration: "05-11-2020",
      areaOfOperation: "Haryana, Punjab, Rajasthan",
      sectorType: "Industrial/Textile"
    },
    {
      societyName: "Ambika Multi State Health Service for the Weaker Section Cooperative Society Ltd",
      societyAddress: "Sai Illam, Floor-2, 53/2, Bharatheshwarar, 3rd Street, Kodambakkam, Chennai 600024, Tamil Nadu",
      state: "TAMIL NADU",
      district: "CHENNAI",
      dateOfRegistration: "14-09-2020",
      areaOfOperation: "Haryana, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "The UP Kisan Development cooperative Society Ltd",
      societyAddress: "65, Bheem Nagar, Vijay Khand 2, Gomti Nagar, Lucknow-226010, Uttar Pradesh",
      state: "UTTAR PRADESH",
      district: "LUCKNOW",
      dateOfRegistration: "10-08-2020",
      areaOfOperation: "Gujarat, Rajasthan, Haryana, Delhi",
      sectorType: "Agro"
    },
    {
      societyName: "Farmtrade Agro Multi state Marketing Cooperative Ltd",
      societyAddress: "B-92, Mayfield Garden Sector 48, Gurugram-122002, Haryana",
      state: "HARYANA",
      district: "GURGAON",
      dateOfRegistration: "10-08-2020",
      areaOfOperation: "Kerala, Karnataka, Maharashtra, Gujarat",
      sectorType: "Marketing"
    },
    {
      societyName: "Bihar State Handloom Weavers Cooperative Union Ltd (BISHCOTEX)",
      societyAddress: "Handloom Bhawan, Rajendra Place, Patna, Bihar",
      state: "BIHAR",
      district: "PATNA",
      dateOfRegistration: "14-07-2020",
      areaOfOperation: "Maharashtra, Karnataka, Tamil Nadu",
      sectorType: "Agro"
    },
    {
      societyName: "Sahastradhara Sahakari Dugdha Utpadak and Prakriya Sahakari Sangh Ltd.",
      societyAddress: "Dairy Road, Near Dr. Bhimrao Ambedkar College, Rajarampuri, Kolhapur, Maharashtra 416008",
      state: "MAHARASHTRA",
      district: "KOLHAPUR",
      dateOfRegistration: "14-07-2020",
      areaOfOperation: "Uttarakhand, Himachal Pradesh",
      sectorType: "Dairy"
    },
    {
      societyName: "Farm to Foreign Exports Entrepreneur Development Multi State Cooperative Society Ltd",
      societyAddress: "H.No. 6-9, Gundugolanu(P.O), Bhimadole (Mandal), Andhra Pradesh-534427",
      state: "ANDHRA PRADESH",
      district: "WEST GODAVARI",
      dateOfRegistration: "16/01/2020",
      areaOfOperation: "Haryana, Uttar Pradesh, Himachal, Punjab",
      sectorType: "Agro"
    },
    {
      societyName: "Dharitri Jute and Eco Friendly Products Multi State Cooperative Society Ltd",
      societyAddress: "D.No.12-2-42111, Alapati Nagar, Gudimalkapur, Hyderabad-500028, Telangana",
      state: "TELANGANA",
      district: "ADILABAD",
      dateOfRegistration: "12/12/2019",
      areaOfOperation: "Bihar, West Bengal, Odisha",
      sectorType: "Agro"
    },
    {
      societyName: "The Malabar Multi State Agro Cooperative Society Limited",
      societyAddress: "1st Floor, Aiswarya Complex, Thavakkara, Kannur, Kerala- 670002",
      state: "KERALA",
      district: "KANNUR",
      dateOfRegistration: "20/10/2019",
      areaOfOperation: "Haryana, Punjab",
      sectorType: "Agro"
    },
    {
      societyName: "Sai Raam Multi State Agri Cooperative Society Ltd",
      societyAddress: "No.6. (D-18), 6th Cross West Extension, Thillai Nagar, Trichy, Tamil Nadu-620008",
      state: "TAMIL NADU",
      district: "DHARMAPURI",
      dateOfRegistration: "06/12/2019",
      areaOfOperation: "Manipur, Meghalaya",
      sectorType: "Agro"
    },
    {
      societyName: "Prabhavana Multi State Womens’ Jute and Allied Fibre Products Cooperative Society Ltd",
      societyAddress: "House. No 2-2-647/G/18/1, Near Shivam Road, DD Colony, Hyderabad, Telangana 500013",
      state: "TELANGANA",
      district: "ADILABAD",
      dateOfRegistration: "27/09/2019",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "The Gayatri Cooperative Urban Bank Ltd",
      societyAddress: "7-1,72, 73,74 Gayatri Towers, Tehsil Chowrasta, Jagtial Town, Dist. Jagtail, Telangana",
      state: "TELANGANA",
      district: "KARIMNAGAR",
      dateOfRegistration: "23/08/2019",
      areaOfOperation: "Gujarat, Rajasthan",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "Shri Saibaba Multi State Cooperative Dudh Utpadak & Prakriya Sangh Ltd",
      societyAddress: "A/p Lohgaon, Tal- Rahata, Dist. Ahmednagar, PIN 413712 Maharashtra",
      state: "MAHARASHTRA",
      district: "AHMEDNAGAR",
      dateOfRegistration: "06/08/2019",
      areaOfOperation: "Maharashtra, Goa, Karnataka, Andhra Pradesh",
      sectorType: "Dairy"
    },
    {
      societyName: "Subhiksha Organic Farmers Multi State Cooperative Society Ltd",
      societyAddress: "Krushi Nivasa, At Kuruvalli,Thirthahalli, Shimoga, Karnataka 577432",
      state: "KARNATAKA",
      district: "SHIMOGA",
      dateOfRegistration: "03/07/2019",
      areaOfOperation: "Andhra Pradesh, Telangana",
      sectorType: "Agro"
    },
    {
      societyName: "The Panipat Urban Cooperative Bank Ltd (PUCB)",
      societyAddress: "510/8, G T Road,Panipat, Haryana 132103",
      state: "HARYANA",
      district: "PANIPAT",
      dateOfRegistration: "14/05/2019",
      areaOfOperation: "Madhya Pradesh, Chhattisgarh, Jharkhand, Bihar",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "Green Earth Agro Cooperative Society Ltd",
      societyAddress: "3/170, Vishwas Khand, Gomti Society , Lucknow 226010, Uttar Pradesh",
      state: "UTTAR PRADESH",
      district: "LUCKNOW",
      dateOfRegistration: "03/05/2019",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Bihar Cooperative Federation Ltd",
      societyAddress: "Budh Marg, Patna 800001, Bihar",
      state: "BIHAR",
      district: "PATNA",
      dateOfRegistration: "03/10/2018",
      areaOfOperation: "Gujarat, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Bharathi Cooperative Housing Society Ltd",
      societyAddress: "87-A, Perambur High Road, Perambur Post, Chennai 600011 Tamil Nadu",
      state: "TAMIL NADU",
      district: "CHENNAI",
      dateOfRegistration: "18/05/2018",
      areaOfOperation: "Haryana, Delhi",
      sectorType: "Housing"
    },
    {
      societyName: "The Surat People’s Cooperative Bank Ltd",
      societyAddress: "Vasudhara Bhavan, Timalyawad, Nanpura, Surat, Gujarat",
      state: "GUJARAT",
      district: "",
      dateOfRegistration: "28/03/2018",
      areaOfOperation: "Haryana, Delhi, Uttar Pradesh",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "Sanmati Sahakari Bank Ltd",
      societyAddress: "9/114, Laxmi Market, Ichalkaranji Kolhapur, Maharashtra 416115",
      state: "MAHARASHTRA",
      district: "JALGAON",
      dateOfRegistration: "27/03/2018",
      areaOfOperation: "Uttarakhand, Himachal Pradesh, Jammu & Kashmir",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "Reserve Bank Staff & Officers Cooperative Credit Society Ltd",
      societyAddress: "C/ Reserve Bank of India, Amar Building, 2nd Floor, Sir P Road, Fort, Mumbai, 400001, Maharashtra",
      state: "MAHARASHTRA",
      district: "MUMBAI",
      dateOfRegistration: "13/02/2018",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Credit"
    },
    {
      societyName: "Dev Lok Housing Cooperative Ltd",
      societyAddress: "A-55, Dwarka, Sector-19, New Delhi",
      state: "NEW DELHI",
      district: "NEW DELHI",
      dateOfRegistration: "02/02/2018",
      areaOfOperation: "Haryana, Punjab, Rajasthan",
      sectorType: "Housing"
    },
    {
      societyName: "Maa Vaishno Agro Multi State Cooperative Society Ltd",
      societyAddress: "Shop No. 25, Block-A, Old LIC Building, Near BSNL Exchange, Super Market, Lalitpur, 284403, Uttar Pradesh",
      state: "UTTAR PRADESH",
      district: "LALITPUR",
      dateOfRegistration: "19/01/2018",
      areaOfOperation: "Haryana, Rajasthan",
      sectorType: "Agro"
    },
    {
      societyName: "Sree Balki Multi State Cooperative Housing Society Ltd",
      societyAddress: "No. 9, Elango Street, Kabilar, Nagar, Manavala Nagar, Tiruvallur 602002, Tamil Nadu",
      state: "TAMIL NADU",
      district: "THIRUVALLUR",
      dateOfRegistration: "05/01/2018",
      areaOfOperation: "Gujarat, Rajasthan, Haryana, Delhi",
      sectorType: "Housing"
    },
    {
      societyName: "Southern Multi State Agro Cooperative Society Ltd",
      societyAddress: "27 Gokulam, Mount Pleasant Road, Conoor , Ooty, Tamil Nadu 643102",
      state: "TAMIL NADU",
      district: "COIMBATORE",
      dateOfRegistration: "19/12/2017",
      areaOfOperation: "Kerala, Karnataka, Maharashtra, Gujarat",
      sectorType: "Agro"
    },
    {
      societyName: "Dombivli Nagari Sahakari Bank Ltd",
      societyAddress: "Plot No P-52, MIDC Phase-II, Kalyan Shil Road, Dombovli (East) Maharashtra 421204",
      state: "MAHARASHTRA",
      district: "THANE",
      dateOfRegistration: "28/07/2017",
      areaOfOperation: "Maharashtra, Karnataka, Tamil Nadu",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "Lucknow Division Insurance Employees Cooperative Credit Society Ltd",
      societyAddress: "Jeevan Prakash Building, 30, Hazratganj , Lucknow, Uttar Pradesh 226001",
      state: "UTTAR PRADESH",
      district: "LUCKNOW",
      dateOfRegistration: "11/07/2017",
      areaOfOperation: "Haryana, Gujarat, Maharashtra, Delhi",
      sectorType: "Credit"
    },
    {
      societyName: "The Kalyan Janata Sahakari Bank Ltd",
      societyAddress: "Kalyanam astu, Om Vijaykrishna, Apt, Adharwadi, Kalyan, West, Thane Maharashtra 421301",
      state: "MAHARASHTRA",
      district: "THANE",
      dateOfRegistration: "24/03/2017",
      areaOfOperation: "Maharashtra, Goa, Karnataka",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "Andaman And Nicobar Islands State Cooperative Bank Ltd",
      societyAddress: "98, Maulana Azad Road, Port Blair, Andaman And Nicobar Islands 744101",
      state: "ANDAMAN AND NICOBAR ISLANDS",
      district: "SOUTH ANDAMAN",
      dateOfRegistration: "05/12/2016",
      areaOfOperation: "Andaman And Nicobar Islands",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "The Eastern Railway Employees Cooperative Bank Limited (Eastern & North East Frontier Railway Employees Co-operative Bank Ltd.)",
      societyAddress: "17, Neta Ji Subhash Road, Kolkata 700001",
      state: "WEST BENGAL",
      district: "MALDAH",
      dateOfRegistration: "22/03/2017",
      areaOfOperation: "Maharashtra, Gujarat, Rajasthan",
      sectorType: "Cooperative Bank"
    },
    {
      societyAddress: "House No. 799, Vill: Taraya Sujan, Post: Tarya Sujan, Block: Seorahi, Tehsil: Tamkihi Raj, Dist. Kushinagar, Pin 274409, Uttar Pradesh",
      societyName: "Purvanchal Krishi Avam Kisan kalyan Multi State Cooperative Society Ltd",
      state: "UTTAR PRADESH",
      district: "KUSHI NAGAR",
      dateOfRegistration: "06/03/2017",
      areaOfOperation: "Gujarat, Rajasthan, Haryana, Delhi",
      sectorType: "Agro"
    },
    {
      societyName: "The Ajara Urban Cooperative Bank Limited",
      societyAddress: "393-B, Main Road Ajara, Kolhapur, 416505, Maharashtra",
      state: "MAHARASHTRA",
      district: "KOLHAPUR",
      dateOfRegistration: "17/02/2017",
      areaOfOperation: "Kerala, Karnataka, Maharashtra, Gujarat",
      sectorType: "Cooperative Bank"
    },
    {
      societyName: "Bihar State Housing Cooperative Federation Ltd",
      societyAddress: "Lalit Bhawan, Bailey Road, Patna, Bihar 800014",
      state: "BIHAR",
      district: "BUXAR",
      dateOfRegistration: "19/10/2016",
      areaOfOperation: "Maharashtra, Karnataka, Tamil Nadu",
      sectorType: "Housing"
    },
    {
      societyName: "The Navodit Cooperative Urban Thrift & Credit Society Ltd",
      societyAddress: "147, South Amarkali, Delhi 110051",
      state: "NEW DELHI",
      district: "NEW DELHI",
      dateOfRegistration: "27/09/2016",
      areaOfOperation: "Haryana, Gujarat, Maharashtra, Delhi",
      sectorType: "Credit"
    }
  ];