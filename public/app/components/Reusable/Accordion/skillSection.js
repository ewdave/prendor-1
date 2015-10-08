/**
 * Created by ponty on 9/14/2015.
 */
import React,{Component,PropTypes} from 'react';
import Accordion from './accordion'
import AccordionMain from './AccordionMain'
import CheckList from '../../Reusable/SelectBoxs/checkList'

/**
 *  Create array or obj that keeps list of all the selected subCategories and their main category
 *  Create const to replace the selected index no
 * */

const skillList = [
    {
        "main_name": "Websites, IT & Software",
        "subList": [
            {"item": "Active Directory", "checked": false}, {
                "item": "Adobe Air",
                "checked": false
            }, {"item": "Adobe Lightroom", "checked": false}, {"item": "Agile Development", "checked": false}, {
                "item": "AJAX",
                "checked": false
            }, {"item": "Alibaba", "checked": false}, {"item": "Amazon Web Services", "checked": false}, {
                "item": "AMQP",
                "checked": false
            }, {"item": "Analytics", "checked": false}, {"item": "Android Wear SDK", "checked": false}, {
                "item": "Angular.js",
                "checked": false
            }, {"item": "Apache", "checked": false}, {"item": "Apache Solr", "checked": false}, {
                "item": "Apple Safari",
                "checked": false
            }, {"item": "Argus Monitoring Software", "checked": false}, {
                "item": "AS400 & iSeries",
                "checked": false
            }, {"item": "ASP", "checked": false}, {"item": "ASP.NET", "checked": false}, {
                "item": "Assembly",
                "checked": false
            }, {"item": "Asterisk PBX", "checked": false}, {
                "item": "Augmented Reality",
                "checked": false
            }, {"item": "AutoHotkey", "checked": false}, {"item": "Azure", "checked": false}, {
                "item": "backbone.js",
                "checked": false
            }, {"item": "Balsamiq", "checked": false}, {"item": "Big Data", "checked": false}, {
                "item": "BigCommerce",
                "checked": false
            }, {"item": "Binary Analysis", "checked": false}, {"item": "Bitcoin", "checked": false}, {
                "item": "Biztalk",
                "checked": false
            }, {"item": "Blog Install", "checked": false}, {
                "item": "Bluetooth Low Energy (BLE)",
                "checked": false
            }, {"item": "BMC Remedy", "checked": false}, {"item": "Boonex Dolphin", "checked": false}, {
                "item": "Bower",
                "checked": false
            }, {"item": "BSD", "checked": false}, {"item": "Business Catalyst", "checked": false}, {
                "item": "C Programming",
                "checked": false
            }, {"item": "C# Programming", "checked": false}, {"item": "C++ Programming", "checked": false}, {
                "item": "CakePHP",
                "checked": false
            }, {"item": "Call Control XML", "checked": false}, {"item": "CasperJS", "checked": false}, {
                "item": "Cassandra",
                "checked": false
            }, {"item": "Chef Configuration Management", "checked": false}, {
                "item": "Chordiant",
                "checked": false
            }, {"item": "Chrome OS", "checked": false}, {"item": "Cisco", "checked": false}, {
                "item": "Cloud Computing",
                "checked": false
            }, {"item": "CMS", "checked": false}, {"item": "COBOL", "checked": false}, {
                "item": "Cocoa",
                "checked": false
            }, {"item": "Codeigniter", "checked": false}, {
                "item": "Cold Fusion",
                "checked": false
            }, {"item": "Computer Graphics", "checked": false}, {
                "item": "Computer Security",
                "checked": false
            }, {"item": "CRE Loaded", "checked": false}, {"item": "CS-Cart", "checked": false}, {
                "item": "CubeCart",
                "checked": false
            }, {"item": "CUDA", "checked": false}, {"item": "D3.js", "checked": false}, {
                "item": "Dari",
                "checked": false
            }, {"item": "Dart", "checked": false}, {
                "item": "Data Warehousing",
                "checked": false
            }, {"item": "Database Administration", "checked": false}, {
                "item": "Database Development",
                "checked": false
            }, {"item": "Database Programming", "checked": false}, {"item": "DDS", "checked": false}, {
                "item": "Debian",
                "checked": false
            }, {"item": "Debugging", "checked": false}, {"item": "Delphi", "checked": false}, {
                "item": "Django",
                "checked": false
            }, {"item": "DNS", "checked": false}, {"item": "DOS", "checked": false}, {
                "item": "DotNetNuke",
                "checked": false
            }, {"item": "Drupal", "checked": false}, {"item": "Dynamics", "checked": false}, {
                "item": "eCommerce",
                "checked": false
            }, {"item": "edX", "checked": false}, {"item": "Elasticsearch", "checked": false}, {
                "item": "eLearning",
                "checked": false
            }, {"item": "Electronic Forms", "checked": false}, {
                "item": "Embedded Software",
                "checked": false
            }, {"item": "Ember.js", "checked": false}, {"item": "Erlang", "checked": false}, {
                "item": "Estonian",
                "checked": false
            }, {"item": "Express JS", "checked": false}, {
                "item": "Expression Engine",
                "checked": false
            }, {"item": "Face Recognition", "checked": false}, {"item": "FileMaker", "checked": false}, {
                "item": "Firefox",
                "checked": false
            }, {"item": "Fortran", "checked": false}, {"item": "Forum Software", "checked": false}, {
                "item": "FreelancerAPI",
                "checked": false
            }, {"item": "Game Consoles", "checked": false}, {
                "item": "Game Design",
                "checked": false
            }, {"item": "Game Development", "checked": false}, {"item": "GameSalad", "checked": false}, {
                "item": "Gamification",
                "checked": false
            }, {"item": "Git", "checked": false}, {"item": "Golang", "checked": false}, {
                "item": "Google Analytics",
                "checked": false
            }, {"item": "Google App Engine", "checked": false}, {
                "item": "Google Cardboard",
                "checked": false
            }, {"item": "Google Chrome", "checked": false}, {
                "item": "Google Earth",
                "checked": false
            }, {"item": "Google Maps API", "checked": false}, {
                "item": "Google Plus",
                "checked": false
            }, {"item": "Google Web Toolkit", "checked": false}, {
                "item": "Google Webmaster Tools",
                "checked": false
            }, {"item": "Google Website Optimizer", "checked": false}, {"item": "GoPro", "checked": false}, {
                "item": "GPGPU",
                "checked": false
            }, {"item": "Grease Monkey", "checked": false}, {"item": "Growth Hacking", "checked": false}, {
                "item": "Grunt",
                "checked": false
            }, {"item": "Hadoop", "checked": false}, {"item": "Haskell", "checked": false}, {
                "item": "HBase",
                "checked": false
            }, {"item": "Heroku", "checked": false}, {"item": "Hive", "checked": false}, {
                "item": "HomeKit",
                "checked": false
            }, {"item": "HP Openview", "checked": false}, {"item": "HTML", "checked": false}, {
                "item": "HTML5",
                "checked": false
            }, {"item": "iBeacon", "checked": false}, {
                "item": "IBM Tivoli",
                "checked": false
            }, {"item": "IBM Websphere Transformation Tool", "checked": false}, {
                "item": "IIS",
                "checked": false
            }, {"item": "Instagram", "checked": false}, {"item": "Internet Security", "checked": false}, {
                "item": "Interspire",
                "checked": false
            }, {"item": "ITIL", "checked": false}, {"item": "J2EE", "checked": false}, {
                "item": "Jabber",
                "checked": false
            }, {"item": "Java", "checked": false}, {"item": "JavaFX", "checked": false}, {
                "item": "Javascript",
                "checked": false
            }, {"item": "Joomla", "checked": false}, {"item": "jQuery / Prototype", "checked": false}, {
                "item": "JSP",
                "checked": false
            }, {"item": "Kinect", "checked": false}, {"item": "Knockout.js", "checked": false}, {
                "item": "LabVIEW",
                "checked": false
            }, {"item": "Laravel", "checked": false}, {"item": "Leap Motion SDK", "checked": false}, {
                "item": "LESS/Sass/SCSS",
                "checked": false
            }, {"item": "Link Building", "checked": false}, {"item": "Linkedin", "checked": false}, {
                "item": "Linux",
                "checked": false
            }, {"item": "Lisp", "checked": false}, {"item": "Lotus Notes", "checked": false}, {
                "item": "Mac OS",
                "checked": false
            }, {"item": "Magento", "checked": false}, {"item": "Magic Leap", "checked": false}, {
                "item": "Map Reduce",
                "checked": false
            }, {"item": "MariaDB", "checked": false}, {"item": "Metatrader", "checked": false}, {
                "item": "Microsoft",
                "checked": false
            }, {"item": "Microsoft Access", "checked": false}, {
                "item": "Microsoft Exchange",
                "checked": false
            }, {"item": "Microsoft Expression", "checked": false}, {
                "item": "Microsoft Hololens",
                "checked": false
            }, {"item": "Microsoft SQL Server", "checked": false}, {
                "item": "MMORPG",
                "checked": false
            }, {"item": "Mobile App Testing", "checked": false}, {"item": "MODx", "checked": false}, {
                "item": "MonetDB",
                "checked": false
            }, {"item": "Moodle", "checked": false}, {"item": "MQTT", "checked": false}, {
                "item": "MVC",
                "checked": false
            }, {"item": "MySpace", "checked": false}, {"item": "MySQL", "checked": false}, {
                "item": "Network Administration",
                "checked": false
            }, {"item": "Nginx", "checked": false}, {"item": "Ning", "checked": false}, {
                "item": "node.js",
                "checked": false
            }, {"item": "NoSQL Couch & Mongo", "checked": false}, {"item": "Objective C", "checked": false}, {
                "item": "OCR",
                "checked": false
            }, {"item": "Oculus Mobile SDK", "checked": false}, {"item": "Open Cart", "checked": false}, {
                "item": "OpenBravo",
                "checked": false
            }, {"item": "OpenCL", "checked": false}, {"item": "OpenGL", "checked": false}, {
                "item": "OpenVMS",
                "checked": false
            }, {"item": "Oracle", "checked": false}, {"item": "OSCommerce", "checked": false}, {
                "item": "Papiamento",
                "checked": false
            }, {"item": "Parallax Scrolling", "checked": false}, {
                "item": "Parallels Automation",
                "checked": false
            }, {"item": "Parallels Desktop", "checked": false}, {
                "item": "Pattern Matching",
                "checked": false
            }, {"item": "Paypal API", "checked": false}, {"item": "PencilBlue CMS", "checked": false}, {
                "item": "Pentaho",
                "checked": false
            }, {"item": "Perl", "checked": false}, {"item": "PhoneGap", "checked": false}, {
                "item": "Photoshop Coding",
                "checked": false
            }, {"item": "PHP", "checked": false}, {"item": "PICK Multivalue DB", "checked": false}, {
                "item": "Pinterest",
                "checked": false
            }, {"item": "Plesk", "checked": false}, {"item": "Plugin", "checked": false}, {
                "item": "PostgreSQL",
                "checked": false
            }, {"item": "Prestashop", "checked": false}, {"item": "Prolog", "checked": false}, {
                "item": "Protoshare",
                "checked": false
            }, {"item": "Puppet", "checked": false}, {"item": "Python", "checked": false}, {
                "item": "QlikView",
                "checked": false
            }, {"item": "Qualtrics Survey Platform", "checked": false}, {
                "item": "QuickBase",
                "checked": false
            }, {"item": "R Programming Language", "checked": false}, {
                "item": "React.js",
                "checked": false
            }, {"item": "REALbasic", "checked": false}, {"item": "Red Hat", "checked": false}, {
                "item": "Redis",
                "checked": false
            }, {"item": "RESTful", "checked": false}, {"item": "Rocket Engine", "checked": false}, {
                "item": "Ruby",
                "checked": false
            }, {"item": "Ruby on Rails", "checked": false}, {
                "item": "Salesforce App Development",
                "checked": false
            }, {"item": "Samsung Accessory SDK", "checked": false}, {"item": "SAP", "checked": false}, {
                "item": "Scala",
                "checked": false
            }, {"item": "Scheme", "checked": false}, {"item": "Script Install", "checked": false}, {
                "item": "Scrum",
                "checked": false
            }, {"item": "Scrum Development", "checked": false}, {"item": "Sencha / YahooUI", "checked": false}, {
                "item": "SEO",
                "checked": false
            }, {"item": "Sharepoint", "checked": false}, {"item": "Shell Script", "checked": false}, {
                "item": "Shopify",
                "checked": false
            }, {"item": "Shopping Carts", "checked": false}, {"item": "Siebel", "checked": false}, {
                "item": "Silverlight",
                "checked": false
            }, {"item": "Smarty PHP", "checked": false}, {"item": "Snapchat", "checked": false}, {
                "item": "Social Engine",
                "checked": false
            }, {"item": "Social Networking", "checked": false}, {
                "item": "Socket IO",
                "checked": false
            }, {"item": "Software Architecture", "checked": false}, {
                "item": "Software Development",
                "checked": false
            }, {"item": "Software Testing", "checked": false}, {"item": "Solaris", "checked": false}, {
                "item": "Spark",
                "checked": false
            }, {"item": "Sphinx", "checked": false}, {"item": "SPSS Statistics", "checked": false}, {
                "item": "SQL",
                "checked": false
            }, {"item": "SQLite", "checked": false}, {"item": "Squarespace", "checked": false}, {
                "item": "Steam API",
                "checked": false
            }, {"item": "Stripe", "checked": false}, {"item": "SugarCRM", "checked": false}, {
                "item": "Swift",
                "checked": false
            }, {"item": "Symfony PHP", "checked": false}, {"item": "System Admin", "checked": false}, {
                "item": "TaoBao API",
                "checked": false
            }, {"item": "TestStand", "checked": false}, {
                "item": "Tizen SDK for Wearables",
                "checked": false
            }, {"item": "Tumblr", "checked": false}, {"item": "Twitter", "checked": false}, {
                "item": "TYPO3",
                "checked": false
            }, {"item": "Ubuntu", "checked": false}, {"item": "Umbraco", "checked": false}, {
                "item": "UML Design",
                "checked": false
            }, {"item": "Unity 3D", "checked": false}, {"item": "UNIX", "checked": false}, {
                "item": "Usability Testing",
                "checked": false
            }, {"item": "User Interface / IA", "checked": false}, {"item": "VB.NET", "checked": false}, {
                "item": "vBulletin",
                "checked": false
            }, {"item": "VertexFX", "checked": false}, {"item": "Virtual Worlds", "checked": false}, {
                "item": "Virtuemart",
                "checked": false
            }, {"item": "Virtuozzo", "checked": false}, {
                "item": "Visual Basic",
                "checked": false
            }, {"item": "Visual Basic for Apps", "checked": false}, {
                "item": "Visual Foxpro",
                "checked": false
            }, {"item": "VMware", "checked": false}, {"item": "VoiceXML", "checked": false}, {
                "item": "VoIP",
                "checked": false
            }, {"item": "Volusion", "checked": false}, {"item": "VPS", "checked": false}, {
                "item": "vTiger",
                "checked": false
            }, {"item": "Vuforia", "checked": false}, {"item": "WatchKit", "checked": false}, {
                "item": "Web Hosting",
                "checked": false
            }, {"item": "Web Scraping", "checked": false}, {"item": "Web Security", "checked": false}, {
                "item": "Web Services",
                "checked": false
            }, {"item": "webMethods", "checked": false}, {
                "item": "Website Management",
                "checked": false
            }, {"item": "Website Testing", "checked": false}, {"item": "Weebly", "checked": false}, {
                "item": "WHMCS",
                "checked": false
            }, {"item": "Windows 8", "checked": false}, {"item": "Windows API", "checked": false}, {
                "item": "Windows Desktop",
                "checked": false
            }, {"item": "Windows Server", "checked": false}, {"item": "Wix", "checked": false}, {
                "item": "Wordpress",
                "checked": false
            }, {"item": "WPF", "checked": false}, {"item": "Wufoo", "checked": false}, {
                "item": "x86/x64 Assembler",
                "checked": false
            }, {"item": "XML", "checked": false}, {"item": "XMPP", "checked": false}, {
                "item": "Xoops",
                "checked": false
            }, {"item": "XQuery", "checked": false}, {"item": "XSLT", "checked": false}, {
                "item": "Yarn",
                "checked": false
            }, {"item": "Yii", "checked": false}, {"item": "YouTube", "checked": false}, {
                "item": "Zen Cart",
                "checked": false
            }, {"item": "Zend", "checked": false}, {"item": "Zendesk", "checked": false}, {
                "item": "Zoho",
                "checked": false
            }]
    },
    {
        "main_name": "Mobile Phones & Computing",
        "subList": [{"item": "Amazon Fire", "checked": false}, {
            "item": "Amazon Kindle",
            "checked": false
        }, {"item": "Android", "checked": false}, {
            "item": "Android Honeycomb",
            "checked": false
        }, {"item": "Appcelerator Titanium", "checked": false}, {
            "item": "Apple Watch",
            "checked": false
        }, {"item": "Blackberry", "checked": false}, {"item": "Geolocation", "checked": false}, {
            "item": "iPad",
            "checked": false
        }, {"item": "iPhone", "checked": false}, {"item": "J2ME", "checked": false}, {
            "item": "Metro",
            "checked": false
        }, {"item": "Mobile Phone", "checked": false}, {"item": "Nokia", "checked": false}, {
            "item": "Palm",
            "checked": false
        }, {"item": "Samsung", "checked": false}, {"item": "Symbian", "checked": false}, {
            "item": "WebOS",
            "checked": false
        }, {"item": "Windows CE", "checked": false}, {"item": "Windows Mobile", "checked": false}, {
            "item": "Windows Phone",
            "checked": false
        }]
    },
    {
        "main_name": "Writing & Content",
        "subList": [{"item": "Academic Writing", "checked": false}, {
            "item": "Article Rewriting",
            "checked": false
        }, {"item": "Articles", "checked": false}, {"item": "Blog", "checked": false}, {
            "item": "Book Writing",
            "checked": false
        }, {"item": "Business Writing", "checked": false}, {
            "item": "Cartography & Maps",
            "checked": false
        }, {"item": "Catch Phrases", "checked": false}, {
            "item": "Communications",
            "checked": false
        }, {"item": "Content Writing", "checked": false}, {"item": "Copy Typing", "checked": false}, {
            "item": "Copywriting",
            "checked": false
        }, {"item": "Creative Writing", "checked": false}, {"item": "eBooks", "checked": false}, {
            "item": "Editing",
            "checked": false
        }, {"item": "Fiction", "checked": false}, {
            "item": "Financial Research",
            "checked": false
        }, {"item": "Forum Posting", "checked": false}, {
            "item": "Ghostwriting",
            "checked": false
        }, {"item": "Grant Writing", "checked": false}, {"item": "LaTeX", "checked": false}, {
            "item": "Medical Writing",
            "checked": false
        }, {"item": "Newsletters", "checked": false}, {"item": "Online Writing", "checked": false}, {
            "item": "PDF",
            "checked": false
        }, {"item": "Poetry", "checked": false}, {"item": "Powerpoint", "checked": false}, {
            "item": "Press Releases",
            "checked": false
        }, {"item": "Academic Writing", "checked": false}, {
            "item": "Article Rewriting",
            "checked": false
        }, {"item": "Articles", "checked": false}, {"item": "Blog", "checked": false}, {
            "item": "Book Writing",
            "checked": false
        }, {"item": "Business Writing", "checked": false}, {
            "item": "Cartography & Maps",
            "checked": false
        }, {"item": "Catch Phrases", "checked": false}, {
            "item": "Communications",
            "checked": false
        }, {"item": "Content Writing", "checked": false}, {"item": "Copy Typing", "checked": false}, {
            "item": "Copywriting",
            "checked": false
        }, {"item": "Creative Writing", "checked": false}, {"item": "eBooks", "checked": false}, {
            "item": "Editing",
            "checked": false
        }, {"item": "Fiction", "checked": false}, {
            "item": "Financial Research",
            "checked": false
        }, {"item": "Forum Posting", "checked": false}, {
            "item": "Ghostwriting",
            "checked": false
        }, {"item": "Grant Writing", "checked": false}, {"item": "LaTeX", "checked": false}, {
            "item": "Medical Writing",
            "checked": false
        }, {"item": "Newsletters", "checked": false}, {"item": "Online Writing", "checked": false}, {
            "item": "PDF",
            "checked": false
        }, {"item": "Poetry", "checked": false}, {"item": "Powerpoint", "checked": false}, {
            "item": "Press Releases",
            "checked": false
        }, {"item": "Product Descriptions", "checked": false}, {
            "item": "Proofreading",
            "checked": false
        }, {"item": "Proposal/Bid Writing", "checked": false}, {
            "item": "Publishing",
            "checked": false
        }, {"item": "Report Writing", "checked": false}, {"item": "Research", "checked": false}, {
            "item": "Resumes",
            "checked": false
        }, {"item": "Reviews", "checked": false}, {"item": "Screenwriting", "checked": false}, {
            "item": "Short Stories",
            "checked": false
        }, {"item": "Slogans", "checked": false}, {
            "item": "Speech Writing",
            "checked": false
        }, {"item": "Technical Writing", "checked": false}, {
            "item": "Translation",
            "checked": false
        }, {"item": "Travel Writing", "checked": false}, {"item": "WIKI", "checked": false}, {
            "item": "Wikipedia",
            "checked": false
        }, {"item": "Word Processing", "checked": false}]
    },
    {
        "main_name": "Design, Media & Architecture",
        "subList": [ {
            "item": "ActionScript",
            "checked": false
        }, {"item": "Adobe Dreamweaver", "checked": false}, {
            "item": "Adobe Flash",
            "checked": false
        }, {"item": "Adobe InDesign", "checked": false}, {
            "item": "Adobe LiveCycle Designer",
            "checked": false
        }, {"item": "Advertisement Design", "checked": false}, {
            "item": "After Effects",
            "checked": false
        }, {"item": "Animation", "checked": false}, {
            "item": "Apple Compressor",
            "checked": false
        }, {"item": "Apple Logic Pro", "checked": false}, {
            "item": "Apple Motion",
            "checked": false
        }, {"item": "Arts & Crafts", "checked": false}, {
            "item": "Audio Production",
            "checked": false
        }, {"item": "Audio Services", "checked": false}, {
            "item": "Autodesk Inventor",
            "checked": false
        }, {"item": "Autodesk Revit", "checked": false}, {
            "item": "Banner Design",
            "checked": false
        }, {"item": "Blog Design", "checked": false}, {"item": "Bootstrap", "checked": false}, {
            "item": "Brochure Design",
            "checked": false
        }, {"item": "Building Architecture", "checked": false}, {
            "item": "Business Cards",
            "checked": false
        }, {"item": "Capture NX2", "checked": false}, {"item": "Caricature & Cartoons", "checked": false}, {
            "item": "CGI",
            "checked": false
        }, {"item": "Cinema 4D", "checked": false}, {"item": "Commercials", "checked": false}, {
            "item": "Concept Design",
            "checked": false
        }, {"item": "Corporate Identity", "checked": false}, {
            "item": "Covers & Packaging",
            "checked": false
        }, {"item": "Creative Design", "checked": false}, {"item": "CSS", "checked": false}, {
            "item": "Fashion Design",
            "checked": false
        }, {"item": "Fashion Modeling", "checked": false}, {
            "item": "Final Cut Pro",
            "checked": false
        }, {"item": "Finale / Sibelius", "checked": false}, {"item": "Flash 3D", "checked": false}, {
            "item": "Flex",
            "checked": false
        }, {"item": "Flyer Design", "checked": false}, {
            "item": "Format & Layout",
            "checked": false
        }, {"item": "Furniture Design", "checked": false}, {
            "item": "GarageBand",
            "checked": false
        }, {"item": "Google SketchUp", "checked": false}, {
            "item": "Graphic Design",
            "checked": false
        }, {"item": "Icon Design", "checked": false}, {"item": "Illustration", "checked": false}, {
            "item": "Illustrator",
            "checked": false
        }, {"item": "iMovie", "checked": false}, {"item": "Industrial Design", "checked": false}, {
            "item": "Infographics",
            "checked": false
        }, {"item": "Interior Design", "checked": false}, {"item": "Invitation Design", "checked": false}, {
            "item": "JDF",
            "checked": false
        }, {"item": "Label Design", "checked": false}, {"item": "Landing Pages", "checked": false}, {
            "item": "Logo Design",
            "checked": false
        }, {"item": "Makerbot", "checked": false}, {"item": "Maya", "checked": false}, {
            "item": "Motion Graphics",
            "checked": false
        }, {"item": "Music", "checked": false}, {"item": "Package Design", "checked": false}, {
            "item": "Photo Editing",
            "checked": false
        }, {"item": "Photography", "checked": false}, {"item": "Photoshop", "checked": false}, {
            "item": "Photoshop Design",
            "checked": false
        }, {"item": "Post-Production", "checked": false}, {
            "item": "Poster Design",
            "checked": false
        }, {"item": "Pre-production", "checked": false}, {"item": "Presentations", "checked": false}, {
            "item": "Prezi",
            "checked": false
        }, {"item": "Print", "checked": false}, {"item": "PSD to HTML", "checked": false}, {
            "item": "PSD2CMS",
            "checked": false
        }, {"item": "QuarkXPress", "checked": false}, {"item": "RWD", "checked": false}, {
            "item": "Shopify Templates",
            "checked": false
        }, {"item": "Sound Design", "checked": false}, {
            "item": "Stationery Design",
            "checked": false
        }, {"item": "Sticker Design", "checked": false}, {"item": "T-Shirts", "checked": false}, {
            "item": "Tattoo Design",
            "checked": false
        }, {"item": "Templates", "checked": false}, {
            "item": "Typography",
            "checked": false
        }, {"item": "User Experience Design", "checked": false}, {
            "item": "Video Broadcasting",
            "checked": false
        }, {"item": "Video Editing", "checked": false}, {
            "item": "Video Production",
            "checked": false
        }, {"item": "Video Services", "checked": false}, {"item": "Videography", "checked": false}, {
            "item": "Visual Arts",
            "checked": false
        }, {"item": "Voice Talent", "checked": false}, {"item": "Website Design", "checked": false}]
    },
    {
        "main_name": "Local Jobs & Services",
        "subList": [{"item": "Air Conditioning", "checked": false}, {
            "item": "Antenna Services",
            "checked": false
        }, {"item": "Appliance Installation", "checked": false}, {
            "item": "Appliance Repair",
            "checked": false
        }, {"item": "Asbestos Removal", "checked": false}, {
            "item": "Asphalt",
            "checked": false
        }, {"item": "Attic Access Ladders", "checked": false}, {
            "item": "Awnings",
            "checked": false
        }, {"item": "Balustrading", "checked": false}, {"item": "Bamboo Flooring", "checked": false}, {
            "item": "Bathroom",
            "checked": false
        }, {"item": "Brackets", "checked": false}, {"item": "Bricklaying", "checked": false}, {
            "item": "Building",
            "checked": false
        }, {"item": "Building Certifiers", "checked": false}, {
            "item": "Building Consultants",
            "checked": false
        }, {"item": "Building Designer", "checked": false}, {
            "item": "Building Surveyors",
            "checked": false
        }, {"item": "Carpentry", "checked": false}, {
            "item": "Carpet Repair & Laying",
            "checked": false
        }, {"item": "Carports", "checked": false}, {"item": "Car washing", "checked": false}, {
            "item": "Ceilings",
            "checked": false
        }, {"item": "Cement Bonding Agents", "checked": false}, {
            "item": "Cleaning Carpet",
            "checked": false
        }, {"item": "Cleaning Domestic", "checked": false}, {
            "item": "Cleaning Upholstery",
            "checked": false
        }, {"item": "Clothesline", "checked": false}, {"item": "Coating Materials", "checked": false}, {
            "item": "Columns",
            "checked": false
        }, {"item": "Commercial Cleaning", "checked": false}, {
            "item": "Computer Help",
            "checked": false
        }, {"item": "Concreting", "checked": false}, {"item": "Cooking / Baking", "checked": false}, {
            "item": "Courses",
            "checked": false
        }, {"item": "Damp Proofing", "checked": false}, {"item": "Decking", "checked": false}, {
            "item": "Decoration",
            "checked": false
        }, {"item": "Delivery", "checked": false}, {"item": "Demolition", "checked": false}, {
            "item": "Disposals",
            "checked": false
        }, {"item": "Drafting", "checked": false}, {"item": "Drains", "checked": false}, {
            "item": "Electricians",
            "checked": false
        }, {"item": "Equipment Hire", "checked": false}, {
            "item": "Event Staffing",
            "checked": false
        }, {"item": "Excavation", "checked": false}, {
            "item": "Extensions & Additions",
            "checked": false
        }, {"item": "Fencing", "checked": false}, {"item": "Feng Shui", "checked": false}, {
            "item": "Financial Planning",
            "checked": false
        }, {"item": "Floor Coatings", "checked": false}, {"item": "Flooring", "checked": false}, {
            "item": "Flyscreens",
            "checked": false
        }, {"item": "Food Takeaway", "checked": false}, {
            "item": "Frames & Trusses",
            "checked": false
        }, {"item": "Furniture Assembly", "checked": false}, {
            "item": "Gardening",
            "checked": false
        }, {"item": "Gas Fitting", "checked": false}, {
            "item": "Glass / Mirror & Glazing",
            "checked": false
        }, {"item": "Guttering", "checked": false}, {"item": "Handyman", "checked": false}, {
            "item": "Heating Systems",
            "checked": false
        }, {"item": "Home Automation", "checked": false}, {
            "item": "Home Organization",
            "checked": false
        }, {"item": "Hot Water", "checked": false}, {"item": "House Cleaning", "checked": false}, {
            "item": "Housework",
            "checked": false
        }, {"item": "IKEA Installation", "checked": false}, {
            "item": "Inspections",
            "checked": false
        }, {"item": "Installation", "checked": false}, {"item": "Interiors", "checked": false}, {
            "item": "Kitchen",
            "checked": false
        }, {"item": "Landscaping", "checked": false}, {
            "item": "Landscaping & Gardening",
            "checked": false
        }, {"item": "Laundry and Ironing", "checked": false}, {
            "item": "Lawn Mowing",
            "checked": false
        }, {"item": "Lighting", "checked": false}, {"item": "Locksmith", "checked": false}, {
            "item": "Millwork",
            "checked": false
        }, {"item": "Mortgage Brokering", "checked": false}, {
            "item": "Moving",
            "checked": false
        }, {"item": "Packing & Shipping", "checked": false}, {"item": "Painting", "checked": false}, {
            "item": "Pavement",
            "checked": false
        }, {"item": "Pest Control", "checked": false}, {"item": "Pet Sitting", "checked": false}, {
            "item": "Pickup",
            "checked": false
        }, {"item": "Piping", "checked": false}, {"item": "Plumbing", "checked": false}, {
            "item": "Removalist",
            "checked": false
        }, {"item": "Roofing", "checked": false}, {"item": "Sculpturing", "checked": false}, {
            "item": "Sewing",
            "checked": false
        }, {"item": "Shopping", "checked": false}, {"item": "Tiling", "checked": false}, {
            "item": "Workshops",
            "checked": false
        }, {"item": "Yard Work & Removal", "checked": false}]
    },
    {
        "main_name": "Business, Accounting, Human Resources & Legal",
        "subList": [{"item": "Accounting", "checked": false}, {
            "item": "Audit",
            "checked": false
        }, {"item": "Business Analysis", "checked": false}, {
            "item": "Business Plans",
            "checked": false
        }, {"item": "Compliance", "checked": false}, {"item": "Contracts", "checked": false}, {
            "item": "Employment Law",
            "checked": false
        }, {"item": "Entrepreneurship", "checked": false}, {"item": "ERP", "checked": false}, {
            "item": "Event Planning",
            "checked": false
        }, {"item": "Finance", "checked": false}, {"item": "Financial Analysis", "checked": false}, {
            "item": "Fundraising",
            "checked": false
        }, {"item": "Human Resources", "checked": false}, {
            "item": "Inventory Management",
            "checked": false
        }, {"item": "ISO9001", "checked": false}, {"item": "Legal", "checked": false}, {
            "item": "Legal Research",
            "checked": false
        }, {"item": "Legal Writing", "checked": false}, {"item": "Management", "checked": false}, {
            "item": "MYOB",
            "checked": false
        }, {"item": "Patents", "checked": false}, {"item": "Payroll", "checked": false}, {
            "item": "PeopleSoft",
            "checked": false
        }, {"item": "Personal Development", "checked": false}, {
            "item": "Project Management",
            "checked": false
        }, {"item": "Property Development", "checked": false}, {
            "item": "Property Law",
            "checked": false
        }, {"item": "Property Management", "checked": false}, {
            "item": "Public Relations",
            "checked": false
        }, {"item": "Quickbooks & Quicken", "checked": false}, {
            "item": "Recruitment",
            "checked": false
        }, {"item": "Risk Management", "checked": false}, {"item": "Salesforce.com", "checked": false}, {
            "item": "SAS",
            "checked": false
        }, {"item": "Startups", "checked": false}, {"item": "Tax", "checked": false}, {
            "item": "Tax Law",
            "checked": false
        }, {"item": "Visa / Immigration", "checked": false}, {"item": "Xero", "checked": false}]
    },
    {
        "main_name": "Sales & Marketing",
        "subList": [{
            "item": "Ad Planning & Buying",
            "checked": false
        }, {"item": "Advertising", "checked": false}, {"item": "Affiliate Marketing", "checked": false}, {
            "item": "Airbnb",
            "checked": false
        }, {"item": "Branding ", "checked": false}, {
            "item": "Bulk Marketing",
            "checked": false
        }, {"item": "Classifieds Posting", "checked": false}, {
            "item": "Conversion Rate Optimisation",
            "checked": false
        }, {"item": "CRM", "checked": false}, {"item": "eBay", "checked": false}, {
            "item": "Email Marketing",
            "checked": false
        }, {"item": "Etsy", "checked": false}, {"item": "Facebook Marketing", "checked": false}, {
            "item": "Google Adsense",
            "checked": false
        }, {"item": "Google Adwords", "checked": false}, {
            "item": "Internet Marketing",
            "checked": false
        }, {"item": "Internet Research", "checked": false}, {"item": "Leads", "checked": false}, {
            "item": "Mailchimp",
            "checked": false
        }, {"item": "Market Research", "checked": false}, {"item": "Marketing", "checked": false}, {
            "item": "MLM",
            "checked": false
        }, {"item": "Periscope", "checked": false}, {"item": "Sales", "checked": false}, {
            "item": "Search Engine Marketing",
            "checked": false
        }, {"item": "Social Media Marketing", "checked": false}, {
            "item": "Telemarketing",
            "checked": false
        }, {"item": "Viral Marketing", "checked": false}, {"item": "Woocommerce", "checked": false}]
    },
    {
        "main_name": "Product Sourcing & Manufacturing",
        "subList": [{"item": "3D Printing", "checked": false}, {
            "item": "Buyer Sourcing",
            "checked": false
        }, {"item": "Logistics & Shipping", "checked": false}, {
            "item": "Manufacturing",
            "checked": false
        }, {"item": "Product Design", "checked": false}, {
            "item": "Product Sourcing",
            "checked": false
        }, {"item": "Supplier Sourcing", "checked": false}]
    },
    {
        "main_name": "Engineering & Sciences",
        "subList": [{"item": "Aeronautical Engineering", "checked": false}, {
            "item": "Aerospace Engineering",
            "checked": false
        }, {"item": "Algorithm", "checked": false}, {"item": "Arduino", "checked": false}, {
            "item": "Astrophysics",
            "checked": false
        }, {"item": "AutoCAD", "checked": false}, {"item": "Biology", "checked": false}, {
            "item": "Biotechnology",
            "checked": false
        }, {"item": "Broadcast Engineering", "checked": false}, {
            "item": "CAD/CAM",
            "checked": false
        }, {"item": "Chemical Engineering", "checked": false}, {
            "item": "Circuit Design",
            "checked": false
        }, {"item": "Civil Engineering", "checked": false}, {
            "item": "Clean Technology",
            "checked": false
        }, {"item": "Climate Sciences", "checked": false}, {
            "item": "Construction Monitoring",
            "checked": false
        }, {"item": "Cryptography", "checked": false}, {"item": "Data Mining", "checked": false}, {
            "item": "Data Science",
            "checked": false
        }, {"item": "Digital Design", "checked": false}, {
            "item": "Drones",
            "checked": false
        }, {"item": "Electrical Engineering", "checked": false}, {
            "item": "Electronics",
            "checked": false
        }, {"item": "Engineering", "checked": false}, {
            "item": "Engineering Drawing",
            "checked": false
        }, {"item": "Finite Element Analysis", "checked": false}, {
            "item": "FPGA",
            "checked": false
        }, {"item": "Genetic Engineering", "checked": false}, {"item": "Geology", "checked": false}, {
            "item": "Geospatial",
            "checked": false
        }, {"item": "GPS", "checked": false}, {"item": "Home Design", "checked": false}, {
            "item": "Human Sciences",
            "checked": false
        }, {"item": "Imaging", "checked": false}, {
            "item": "Industrial Engineering",
            "checked": false
        }, {"item": "Instrumentation", "checked": false}, {
            "item": "Linear Programming",
            "checked": false
        }, {"item": "Machine Learning", "checked": false}, {
            "item": "Manufacturing Design",
            "checked": false
        }, {"item": "Materials Engineering", "checked": false}, {
            "item": "Mathematics",
            "checked": false
        }, {"item": "Matlab & Mathematica", "checked": false}, {
            "item": "Mechanical Engineering",
            "checked": false
        }, {"item": "Mechatronics", "checked": false}, {"item": "Medical", "checked": false}, {
            "item": "Microbiology",
            "checked": false
        }, {"item": "Microcontroller", "checked": false}, {
            "item": "Microstation",
            "checked": false
        }, {"item": "Mining Engineering", "checked": false}, {
            "item": "Nanotechnology",
            "checked": false
        }, {"item": "Natural Language", "checked": false}, {
            "item": "PCB Layout",
            "checked": false
        }, {"item": "Petroleum Engineering", "checked": false}, {
            "item": "Physics",
            "checked": false
        }, {"item": "PLC & SCADA", "checked": false}, {
            "item": "Product Management",
            "checked": false
        }, {"item": "Project Scheduling", "checked": false}, {
            "item": "Quantum",
            "checked": false
        }, {"item": "Remote Sensing", "checked": false}, {
            "item": "Renewable Energy Design",
            "checked": false
        }, {"item": "Robotics", "checked": false}, {"item": "RTOS", "checked": false}, {
            "item": "Scientific Research",
            "checked": false
        }, {"item": "Solidworks", "checked": false}, {
            "item": "Statistical Analysis",
            "checked": false
        }, {"item": "Statistics", "checked": false}, {
            "item": "Structural Engineering",
            "checked": false
        }, {"item": "Surfboard Design", "checked": false}, {
            "item": "Telecommunications Engineering",
            "checked": false
        }, {"item": "Textile Engineering", "checked": false}, {
            "item": "Textile Engineering",
            "checked": false
        }, {"item": "Verilog / VHDL", "checked": false}, {"item": "Wireless", "checked": false}]
    },
    {
        "main_name": "Data Entry & Admin",
        "subList": [{"item": "Article Submission", "checked": false}, {
            "item": "Bookkeeping",
            "checked": false
        }, {"item": "BPO", "checked": false}, {"item": "Call Center", "checked": false}, {
            "item": "Customer Service",
            "checked": false
        }, {"item": "Customer Suphport", "checked": false}, {
            "item": "Data Entry",
            "checked": false
        }, {"item": "Data Processing", "checked": false}, {
            "item": "Desktop Support",
            "checked": false
        }, {"item": "Email Handling", "checked": false}, {"item": "Excel", "checked": false}, {
            "item": "General Office",
            "checked": false
        }, {"item": "Helpdesk", "checked": false}, {
            "item": "Investment Research",
            "checked": false
        }, {"item": "Microsoft Office", "checked": false}, {
            "item": "Microsoft Outlook",
            "checked": false
        }, {"item": "Order Processing", "checked": false}, {
            "item": "Phone Support",
            "checked": false
        }, {"item": "Procurement", "checked": false}, {
            "item": "Technical Support",
            "checked": false
        }, {"item": "Telephone Handling", "checked": false}, {
            "item": "Time Management",
            "checked": false
        }, {"item": "Transcription", "checked": false}, {
            "item": "Video Upload",
            "checked": false
        }, {"item": "Virtual Assistant", "checked": false}, {"item": "Web Search", "checked": false}]
    },
    {
        "main_name": "Others",
        "subList": [{"item": "Anything Goes", "checked": false}, {
            "item": "Automotive",
            "checked": false
        }, {"item": "Brain Storming", "checked": false}, {
            "item": "Business Coaching",
            "checked": false
        }, {"item": "Christmas", "checked": false}, {"item": "Cooking & Recipes", "checked": false}, {
            "item": "Dating",
            "checked": false
        }, {"item": "Education & Tutoring", "checked": false}, {
            "item": "Energy",
            "checked": false
        }, {"item": "Financial Markets", "checked": false}, {"item": "Flashmob", "checked": false}, {
            "item": "Freelance",
            "checked": false
        }, {"item": "Genealogy", "checked": false}, {"item": "Health", "checked": false}, {
            "item": "History",
            "checked": false
        }, {"item": "Insurance", "checked": false}, {"item": "Jewellery", "checked": false}, {
            "item": "Life Coaching",
            "checked": false
        }, {"item": "Nutrition", "checked": false}, {"item": "Pattern Making", "checked": false}, {
            "item": "Psychology",
            "checked": false
        }, {"item": "Real Estate", "checked": false}, {"item": "Sports", "checked": false}, {
            "item": "Test Automation",
            "checked": false
        }, {"item": "Testing / QA", "checked": false}, {"item": "Training", "checked": false}, {
            "item": "Troubleshooting",
            "checked": false
        }, {"item": "Valuation & Appraisal", "checked": false}]
    }
]
export default class SkillSelection extends Component {
    constructor() {
        super();
        this.state = {showAccordion: false, listArray: skillList,chosenCount:0}
    }

    showAccordionComp = (e) => {
        
        e.preventDefault();
        let showAccordion = this.state.showAccordion;
        if (!showAccordion) {
            this.setState({showAccordion: true})

        } else {
            this.setState({showAccordion: false})
        }

        this.props.selectChange(this.getChosenList(this.state.listArray));
    };
    getChosenList = (array) => {
        let listArray = [];
        for(let i = 0; i < array.length; i++){
            for(let p = 0; p < array[i].subList.length; p++){
                if(array[i].subList[p].checked){
                    listArray.push({main_name:array[i].main_name,subItem:array[i].subList[p].item})
                }
            }
        }
        return listArray;

    };
    checkListItem = (index,parentIndex) => {
        let currentCount = this.state.chosenCount;

        /**
         * maximum number of skills allowed to be selected is 20
         * so we set conditional statements
         * if the current count is less than 21 and then the user is allowed to check an unchecked list
         *
         * */

        let array = this.state.listArray;
        let count = this.state.chosenCount;
        if(currentCount < 20){

            if(array[parentIndex].subList[index].checked){
                array[parentIndex].subList[index].checked = false;
                count = count - 1;

            } else {
                 array[parentIndex].subList[index].checked = true;
                 count = count + 1;
            }
           

        } else {
          
            if(array[parentIndex].subList[index].checked){
                array[parentIndex].subList[index].checked = false;
                 count = count - 1;//
            } else {
                alert("Sorry you cannot select more than 20 skills please uncheck a previous one if this must be used")
            }
        }


        this.setState({listArray:array,chosenCount:count});

    };

    render() {
        let showAccordion = this.state.showAccordion;
        let listArray = this.state.listArray;
        let chosenCount  = this.state.chosenCount;
        const items = listArray.map((content, index)=> {
            return (
                <AccordionMain text={content.main_name}  key={index +""+content.main_name+""}>
                    <CheckList listItems={content.subList} onCheckItem={this.checkListItem} parentIndex={index}
                              />
                </AccordionMain>
            )
        })

        return (
            <div className="CategorySection">
                <div className="CatTitle" onClick={(e) => this.showAccordionComp(e)}><i className="red">{chosenCount}</i>
                    Skills <span className="caret-lower"><i
                        className="fa fa-caret-down"></i></span></div>


                {showAccordion ?
                    <div className="BodyCategory">
                        <span className="CatTab">Field</span>
                        <Accordion>
                            { items }
                        </Accordion>

                        <div className="CatBottom">
                            <div className="CatBtnSubmit">
                                <button className="left" onClick={(e) => this.showAccordionComp(e)}>OK</button>
                                <span className="right"><span className="counter"><i>{chosenCount}</i>of 20 Selected</span></span>
                            </div>
                        </div>
                    </div>
                    :
                    null}


            </div>
        )
    }
}



SkillSelection.propTypes = {
    selectChange:PropTypes.func.isRequired
}