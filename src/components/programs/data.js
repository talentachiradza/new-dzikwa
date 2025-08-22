import { GraduationCap, Heart, Users, TreePine, Award, HeartHandshake as Handshake, BookOpen, Monitor, Stethoscope, Music, Briefcase, Sprout, Paintbrush, Medal } from 'lucide-react';

export const programsData = [
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    description: 'Comprehensive educational support from primary to higher education levels.',
    color: 'bg-blue-500',
    subPrograms: [
      {
        title: 'Primary Education',
        slug: 'primary-education',
        icon: 'BookOpen',
        description: 'Supporting children aged 6-13 with quality primary education, school supplies, and learning materials.',
        details: 'Primary school education in Dzikwa covers children aged 6 to 13, encompassing grades 1 to 7. The curriculum includes subjects such as English, the native language (typically Shona), Mathematics, Science & Technology, ICT, Family & Religious Studies, Heritage Studies, Agriculture, Visual & Performing Arts, and Physical Education. Dzikwa Trust facilitates the education of its children by enrolling them in eight government or municipal primary schools located in Dzivarasekwa township. Regular communication is maintained between Dzikwa Trust staff, guardians, school heads, and teachers to ensure the students’ progress and well-being. Upon completing primary school, Dzikwa Trust pupils undergo the Grade 7 exam, administered by the Zimbabwe School Examinations Council (ZIMSEC). The attached graph illustrates the comparison between the pass rates of Dzikwa Trust and the national average for this exam. Notably, our students have achieved a 100% pass rate over the past three years. This exceptional performance can be attributed to a range of factors, including the provision of additional remedial lessons conducted daily at Dzikwa Centre by former students, volunteers, and professional teachers. Furthermore, the implementation of e-learning platforms such as Akello Smart Learning and Learning Passport has played a significant role in enhancing our students’ educational achievements. Dzikwa Trust actively invests in licenses for these e-learning platforms to facilitate effective learning experiences.'
      },
      {
        title: 'Secondary Education',
        slug: 'secondary-education',
        icon: 'GraduationCap',
        description: 'Helping students complete their secondary education with scholarships and academic support.',
        details: 'Children who achieve satisfactory results in their primary school exams proceed to O-level studies, starting from Form 1 and continuing until Form 4. The number of subjects studied increases to a range of 8 to 11. Dzivarasekwa is home to two government high schools, namely DZ 1 High School and DZ 2 High School, with approximately 50 Dzikwa Trust students attending each of these schools. Upon successfully passing their O-level exams with commendable grades in at least 5 subjects, students have the option to pursue A-level studies (Forms 5-6) or other vocational courses. However, the continuation of Dzikwa Trust students’ studies beyond O-levels requires the specific consent of their individual sponsors. At both the O-level and A-level stages, Dzikwa Trust students consistently achieve final examination results that surpass the national and local averages. Over the span of eight years, it is evident that the Dzikwa Trust consistently outperforms the national pass rate, as depicted by the bar graph. The graph clearly illustrates that a higher percentage of students pass the Dzikwa Trust exam compared to the national exam, indicating that the Dzikwa Trust’s evaluation of student performance and knowledge is more effective. This remarkable performance can be attributed to various factors, including the provision of additional remedial lessons conducted daily at the Dzikwa Centre by former students, volunteers, and professional teachers. Additionally, the implementation of e-learning platforms such as Akello Smart Learning and Learning Passport has played a significant role in enhancing the educational achievements of our students. Dzikwa Trust actively invests in licenses for these e-learning platforms to facilitate a productive learning experience.'
      },
      {
        title: 'Higher Education',
        slug: 'higher-education',
        icon: 'Users',
        description: 'University and college scholarships for exceptional students from disadvantaged backgrounds.',
        details: 'Dzikwa Trust program focus is on assisting vulnerable children through primary and secondary school. Over the years, it has been able to also send several students to higher education studies, either with financial support from dedicated sponsors or through government-to-government scholarships and also through apprenticeship programs in Zimbabwe. Since 2006, a total of 114 Dzikwa students have completed a higher education degree, diploma or certificate, including 48 university degrees. Students have studied and are studying both in Zimbabwe and abroad in several countries on scholarships, such as Algeria, China, Finland, Russia, South Africa, USA, Turkey.'
      },
      {
        title: 'Remedial Lessons & E-Learning',
        slug: 'remedial-elearning',
        icon: 'Monitor',
        description: 'Additional academic support and digital learning opportunities for struggling students.',
        details: 'The COVID-19 pandemic unraveled the workings of the world as we knew it, and the significance of sound e-learning systems on education became evident. At the same time, the need to rely on e-learning systems laid bare all the deficiencies in developing countries. Schools in Zimbabwe were closed for long periods. The underdeveloped infrastructure and lack of tools made it impossible for schools in poor townships to provide education via e-learning to the most vulnerable youth. Dzikwa Trust Fund tackled this barrier to education in Dzivaresekwa head-on in 2020. We started quickly building up our own capacity to provide e-learning. We realized that e-learning platforms, with proper facilitation, could be a potent instrument in closing the learning gap for students under Dzikwa Trust education support program. We were able to secure smartphones and tablets, thanks to Bank of Finland, Huawei Zimbabwe and UNICEF Zimbabwe donations. Dzikwa Trust Centre can provide a safe environment to make use of digital learning solutions. The Center’s internet connectivity was even enhanced for e-learning. We nominated one dedicated Officer to oversee all e-learning efforts and we secured access to devices to start in July 2020.  After research, we chose affordable e-learning platforms with suitable content and data for the curriculum and examinations in Zimbabwe.'
      },
      {
        title: 'Basic ICT & ICDL Training',
        slug: 'ict-training',
        icon: 'Monitor',
        description: 'Computer literacy and digital skills training for students and community members.',
        details: 'On Monday 2nd May 2011, Dzikwa Trust Fund opened its new ICT Block for orphaned children in Dzivarasekwa. The Ambassador of Finland to Zimbabwe, Mrs. Sinikka Antila opened the new facility, together with Managing Director of Old Mutual Zimbabwe, Mr. Jonas Mushosho and District Education Supervisor, Mr. K.J. Kagoro, in a festive ceremony held at the Dzikwa Activity Centre. The new ICT Block consists of a fully functional classroom for 20 students and a teacher, and of a small Internet access point, which is the first one in the densely Dzivarasekwa area. Bridging the Digital Divide Dzikwa Trust Fund provides free access to computers, internet & technology training courses, including basic computer skills, web browsing, digital entrepreneurship & coding, for vulnerable children & youth. Dzikwa Trust has been providing support to vulnerable individuals by offering comprehensive ICT skills training. The ICT program offered by Dzikwa Trust currently places emphasis on essential foundational ICT skills, ensuring that all beneficiaries receive instruction in Scratch programming, ICDL, and computer science. Scratch programming, generously sponsored by Harare International School, is taught to primary students, as well as students in forms 1 and 2. Additionally, commercial ICDL training is provided to beneficiaries whose fees have been covered by sponsors. Furthermore, computer science education is incorporated into the curriculum for all students pursuing ICT studies (HEXCO, ZIMSEC) within the school.'
      }
    ]
  },
  {
    id: 'wellbeing',
    title: 'Wellbeing',
    icon: Heart,
    description: 'Holistic health and social development programs for community wellbeing.',
    color: 'bg-red-500',
    subPrograms: [
      {
        title: 'Nutrition',
        slug: 'nutrition',
        icon: 'Heart',
        description: 'School feeding programs and nutrition education for children and families.',
        details: 'Dzikwa Trust is providing daily hot meals for its children from Monday to Saturday. The kitchen/dining hall building was funded by a Finnish development cooperation grant in 2010. The meal consists of sadza (thick maize meal porridge) and vegetables, supplemented with meat, fish, or beans. For many of the children, this may be their only decent meal of the day. Five mothers from the community with children in the Dzikwa Trust programme work as cooks. Most of the vegetables, as well as chicken and rabbit meat, are provided by the Dzikwa Trust Food Security programme. Due to the COVID-19 pandemic, Dzikwa Trust started serving a takeaway meal and extended the service to a large number of needy community children. In 2020-2021, Dzikwa Kitchen offered on average 850 hot meals/ day under its emergency feeding scheme. The record year was 2021, with a total of 230,000 meals served. In normal circumstances, the daily numbers average around 350 and the monthly numbers between 8,000 – 9,000 meals. Dzikwa Kitchen is open from Monday to Saturday. Meals are being served between 10 am to 2.30 pm and children come to eat either before going to school or after school. Dzikwa Kitchen records everyone coming to eat school by school. Supplies are procured in bulk monthly, with vegetables and most of the meat coming from Dzikwa Trust’s own food production. The average cost/ meal is USD 0.62. Dzikwa Kitchen also continuously feeds 80 – 100 needy children who are not in the education support programme, from nearby poor families. This is our way of supporting the community at large within our means. A total of 1,7 million hot meals offered since 2003 Dzikwa Kitchen also feeds over 60 needy children who are not in the education support programme, from nearby poor families. This is our way of supporting the community at large within our means. Combating Food Insecurity In 2009, Dzikwa Trust provided over 134,000 hot meals during a national crisis. During the COVID-19 pandemic, meal distribution peaked at 229,175 in 2021. With 2024 declared a national disaster, Dzikwa Trust is expected to further scale up meal provision. You can help by donating in-kind or financial contributions to support those facing food insecurity.'
      },
      {
        title: 'Health Care',
        slug: 'health-care',
        icon: 'Stethoscope',
        description: 'Basic healthcare services, health education, and medical support for communities.',
        details: 'Dzikwa Trust ensures that its children receive basic health care. The health support covers: First Aid medical kits and attention to small problems at the Centre; medication, including that based on prescriptions; visits to nearby Rujeko Clinic; visits to general practitioners; visit to specialist doctors; dental health care; eye doctor visits and spectacles and also surgeries in hospitals under case-by-case special arrangements. Health education includes First Aid courses, HIV/AIDS awareness and sexual & reproductive health. Several doctors and clinics in Harare give their services to Dzikwa Trust children free of charge or at a meaningful discount. For over 10 years, Harare e.V. in Germany has contributed about 50% of the funds needed to cover the children’s annual health care expenditure.'
      },
      {
        title: 'Birth Certificates & IDs',
        slug: 'identity-documents',
        icon: 'Users',
        description: 'Assistance with obtaining essential identity documents for community members.',
        details: 'The process of getting a birth certificate is not automated in Zimbabwe. Several times, Dzikwa-children are missing this key document for identity. It can be difficult to enrol at school without a birth certificate and registering for compulsory school exams requires the child to have this document. Having a birth certificate is the starting point for other identity documents. Over the years, Dzikwa Trust has helped well over 250 children to get their missing birth certificates, as well as digitalised IDs and passports for older students.'
      }
    ]
  },
  {
    id: 'sports',
    title: 'Sports',
    icon: Medal,
    description: 'Promoting teamwork, fitness, and healthy competition.',
    color: 'bg-orange-500',
    subPrograms: [
      {
        title: 'Ballgames & Athletics',
        slug: 'sports-athletics',
        icon: 'Users',
        description: 'Sports programs promoting physical fitness, teamwork, and healthy competition.',
        details: 'Dzikwa Trust has four boys’ soccer teams and both boys’ and girls’ basketball teams. Tag Rugby is relevant for children under 13 years. In 2020, the Dzikwa Trust Chess Club joined the Zimbabwe Chess Federation. Sports and games feature prominently in our children’s overall development. We provide sportwear, shoes and other equipment. Harare e.V. in Germany is our dedicated annual donor for soccer. Sports and educational hobbies are at the heart of our children’s recreational activities. Since 2003, Dzikwa Trust has organized an Annual Athletics Day, with competitions in all key track and field disciplines. Donors and volunteers from the community help to ensure its success. The event attracts attention from the print media and ZTV, and its Patrons have included NMB Bank and the Chinese Embassy in Harare.'
      }
    ]
  },
  {
    id: 'arts-culture',
    title: 'Arts & Culture',
    icon: Paintbrush,
    description: 'Nurturing talent and creativity through cultural activities.',
    color: 'bg-yellow-500',
    subPrograms: [
      {
        title: 'Performing Arts',
        slug: 'performing-arts',
        icon: 'Music',
        description: 'Music, dance, and drama programs to develop creativity and cultural expression.',
        details: 'Training in performing arts is part of our empowering and capacity-building efforts for the children. There is a rich creative tradition in Dzivarasekwa, and through well-designed activities in music, dance, singing, drama, and poetry, our children can cherish and promote Zimbabwe’s rich cultural heritage. Groups from grade 1 to tertiary gather to rehearse at the Dzikwa Centre. Teachers are professional local artists, Dzikwa Trust staff, and alumni. Annually, close to 100 children participate in the training. Dzikwa Culture Group counts among the leading children’s and youth performing arts groups in Zimbabwe. They perform at our own functions, as well as at several external venues, e.g. at state functions, National Days at embassies in Harare, and at events organized by international organisations and cooperate partners.'
      }
    ]
  },
  {
    id: 'sisterhood',
    title: 'Sisterhood Program',
    icon: Handshake,
    description: 'Empowering girls and young women through mentorship and life skills.',
    color: 'bg-pink-500',
    subPrograms: [
      {
        title: 'Girls\' Empowerment & Mentoring',
        slug: 'girls-empowerment',
        icon: 'Heart',
        description: 'Specialized programs supporting girls\' education, leadership, and life skills.',
        details: 'A special programme for our adolescent girls is called Dzikwa Trust ”Sisterhood Club”. Girls’ empowerment in its broadest sense has been an important aspect of Dzikwa Trust’s support activities. We aim to teach girls their rights and to give them a strong, positive voice in standing up for their rights. The girls get education in hygiene, reproductive health, and other health-related issues. Girls’ empowerment also covers skills in performing arts and practical skills training. Dedicated funding comes from a small family trust in Finland. Annually, the programme reaches up to 80 girls between 13 to 18 years. Many sessions are shared with boys in the same age group. Dzikwa Trust collaborates with other girls and women’s rights organizations in Zimbabwe.'
      }
    ]
  },
  {
    id: 'edu4talent',
    title: 'Edu4Talent',
    icon: Users,
    description: 'Career development and entrepreneurship programs to unlock individual potential.',
    color: 'bg-purple-500',
    subPrograms: [
      {
        title: 'Career Guidance & Mentoring',
        slug: 'career-guidance',
        icon: 'Users',
        description: 'Professional mentoring and career counseling for students and young adults.',
        details: 'Edu4Talent objectives in career guidance have been formulated based on surveys regarding the needs of the Zimbabwean students finishing school and the needs of the corporate sector for future jobs. This is a comprehensive, developmental program designed to assist youths in secondary/advanced level in making and implementing informed educational and occupational choices. This support is critical in developing an individual’s competencies in self-knowledge, educational and occupational exploration, and career planning from as early as junior secondary level. This will also help better prepare individuals for the changing workplace of the 21st century. Career guidance Our tailored career guidance activities include elements like: Career information, covering information on courses, occupations and career paths. This includes labour market information. Career counseling is conducted on a one-on-one basis or in small groups, in which attention is focused on the distinctive career issues faced by individuals. Career education, as part of the educational curriculum, in which attention is paid to helping groups of individuals to develop the competencies for managing their career development.'
      },
      {
        title: 'Employability & Entrepreneurship Skills',
        slug: 'entrepreneurship-skills',
        icon: 'Briefcase',
        description: 'Training in job readiness, business skills, and entrepreneurship development.',
        details: 'Dzikwa Trust/Edu4talent has an annual pool of talented and highly motivated vulnerable students with excellent school results. Students receive additional coaching and training in key skills for better future employability, such as critical thinking, problem-solving, communication, directing one’s own work, teamwork, collaboration, and cross-cultural awareness. Digital literacy skills are essential in preparing Dzikwa-youth for further studies and future careers. Edu4Talent focuses on building students’ technical skills in IT for all critical applications, as well as their broader information, media and social media literacy skills. Youth in Dzivarasekwa does not have many opportunities to get systematic career guidance. Students’ knowledge and deeper understanding of different professions and their requirements is weak. Edu4talent organises career guidance event to students starting from Form 2. Entrepreneurial and employable skilled youths and graduates with these skills will lead to sustainable growing economies.Understanding of the global economy and future job trendsOur aim is to have a pool of youths with a zeal to read and with an understanding of the global economy, its functioning, and its implications to the youth.'
      },
      {
        title: 'Sponsorship Framework & Process',
        slug: 'sponsorship-framework',
        icon: 'Heart',
        description: 'Structured sponsorship programs connecting donors with beneficiaries.',
        details: 'The current process to interact with potential corporate entities and to secure corporate sponsorships to deserving students is based on the following interactive key steps: A corporate/individual sponsor expresses interest in Edu4Talent program. Edu4Talent representative together with the sponsor review the latest general experience of the program, the options in the education space, the desired outcomes of the commitment from the sponsor’s point of view and the relevant cost estimates. A list and profiles of the best potential candidates from the post-O-level students under Dzikwa Trust support selecting 5 top candidates who best meet the criteria is provided. The sponsors review the candidates, may ask for additional info, and select up to 3 candidates for a detailed interview process – and select the preferred candidate. Edu4Talent, the sponsor and the candidates, the partners, agree on a conceptual plan covering the duration of the study for higher education, any additional studies needed prior to entering the higher education programs, and a possible trainee/work opportunity with the sponsor during and after studies. The partners also agree on a reporting/communication plan between the partners during the studies and whether and how the case can be used in external communication by the sponsor (as an example in demonstrating a CSR program) and Edu4Talent (demonstrating the Edu4Talent concept).'
      }
    ]
  },
  {
    id: 'reforestation',
    title: 'Reforestation & Food Security',
    icon: TreePine,
    description: 'Environmental conservation and sustainable agriculture initiatives.',
    color: 'bg-green-500',
    subPrograms: [
      {
        title: 'Nursery & Reforestation',
        slug: 'reforestation',
        icon: 'TreePine',
        description: 'Tree nurseries and reforestation projects to combat deforestation.',
        details: 'Dzivarasekwa children need environmental and conservation education to understand how climate change, pollution, and bad waste management impact lives. Dzikwa Trust Re-forestation & Food Security Project occupies a 60-hectare degraded land area in Dzivarasekwa, leased in 2012 from the City of Harare. Soon after initial tree planting, we expanded with a proper plant nursery, with both firewood and indigenous tree seedlings, horticulture, fruit trees, and beekeeping. From 2011 to 2016, the funding came from the Finnish development cooperation grants. Our collaborators have been the City of Harare, Forestry Commission of Zimbabwe, AGRITEX/Ministry of Agriculture, Bindura University of Science Education, and VITRI/Viikki Tropical Resources Institute of the University of Helsinki. We have planted 70,000 trees over 20 hectares over the years. The food security activities have expanded and cover two greenhouses, a large open-air irrigated vegetable garden, as well as broiler and rabbit husbandry, thanks to grants from Netherlands and Australia in 2018-2020. We now provide 80% of the daily kitchen vegetables, 50 chickens, and 20 rabbits for meat on a weekly basis. Since 2007, Dzikwa Trust has planted over 70,000 trees in the outskirts of Dzivarasekwa to reforest a degraded land area. Dzikwa Trust produces on average 20,000 tree seedlings annually in its nursery. Dzikwa Trust organises an annual Tree Planting Day for its children in early December. Children develop understanding, awareness, and sensitivity to environmental challenges in Dzivarasekwa and in Zimbabwe. The aim is to enhance children’s motivation to do something in their own environment to identify and help resolve every-day environmental issues. Children learn about climate change and the importance of trees. The Food Security produces annually 4,000 broilers, 1,200 rabbits, and most of the large variety of vegetables for the feeding of children at the Dzikwa Kitchen. Dzikwa Trust is establishing a fishpond, and new vegetable and herbal gardens. Currently one productive orchard gives fruits to children, and two new orchards are being built. Beekeeping ensures thriving honey production. The Reforestation and Food Security programme has had over 30 students on study-related attachments.'
      },
      {
        title: 'Animal Husbandry',
        slug: 'animal-husbandry',
        icon: 'Heart',
        description: 'Livestock programs providing sustainable protein sources and income.',
        details: 'Dzikwa Trust started raising broilers and rabbits for children’s daily feeding in 2018. The facilities for animal husbandry were built with a dedicated grant through the Embassy of the Kingdom of the Netherlands. The monthly production is 300 broilers. About half of the production is delivered to the Dzikwa Kitchen and the rest to the Dzivarasekwa community members. ReFoSec started rearing rabbits in 2018. It is developing its own breeding stock. The current monthly volume of rabbits delivered to the Dzikwa Kitchen is 96. There are no deliveries of rabbits to the community.'
      },
      {
        title: 'Horticulture',
        slug: 'horticulture',
        icon: 'Sprout',
        description: 'Vegetable gardening and crop production for food security and income generation.',
        details: 'Dzikwa Trust started its food security activities in 2013 in a small vegetable garden. It has significantly expanded the production with the help of grants from Australia in 2018 – 2020. Dzikwa Trust now practices horticulture both in large open-area vegetable gardens and in two greenhouses, each measuring 200 m². Solar power, water tanks and extensive drip irrigation funded with Australian Embassy Direct Aid are critical for successful operations. Almost all green leafy vegetables and many other vegetables used in Dzikwa Kitchen daily are produced by the Reforestation & Food Security team. Varieties produced include spinach, rape, covo, sugarloaf, cabbage and Chinese cabbage, red and green peppers, beetroot, onions. Monthly deliveries to the Dzikwa Kitchen are 80 kgs and the rest of the tomatoes are sold to the Community at cost.'
      },
      {
        title: 'Orchard & Apiary',
        slug: 'orchard-apiary',
        icon: 'TreePine',
        description: 'Fruit tree cultivation and beekeeping for sustainable food production.',
        details: 'Orchard: Dzikwa Trust orchard currently covers the 0.5-hectare area around the nursery and includes 130 various fruit trees, such as mango, pawpaw, peach, orange, lemon, granadilla, and avocado. Expansion of orchards in 2023 are 600 fruit trees on 1.5 hectares, or 3.7 acres, funded by UNDP. ---Apiary/ Beekeeping: Dzikwa Trust has 9 beehives operating so far and in 2022, an additional 18 beehives shall be established with a UNDP grant. The additional 18 beehives will be added in 2023.'
      }
    ]
  }
];