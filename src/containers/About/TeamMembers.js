const comingSoon = 'https://res.cloudinary.com/dhze7gimq/image/upload/c_pad,h_252,w_400/v1556066478/coming_soon.jpg';

const Members = [
  {
    name: 'Christina Gouveia',
    description: [
      'I graduated from Sutherland Chan in 2011, and have had a special interest area in Therapeutic Breast Massage & Pregnancy massage! I have successfully treated those with abdominal wall scars, Caesarian scars, chest wall & breast tissue surgical procedures and post-surgical conditions such as lymphedema.',  
    ],
    funFact: 'I have a Husky mix named Shadow!',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379524/Faces_OM-_22_scj326.jpg',
  },
  {
    name: 'Katelyn Frannssen',
    description: [
      "I believe massage provides the perfect combination to ease both the mind and the body. I love supporting mamas as they bring beautiful new life into the world.",
      "I always take extra time with each client to create a unique treatment plan catered to their individual needs. I believe it is important to educate all of the mamas I see on ways to prevent injury and live pain free!",
    ],
    funFact: 'You might recognize Katelyn from our emails! She helps us behind the scenes as our admin assistant!',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379523/Faces_OM-_9_s3esc7.jpg',
  },
  {
    name: 'Amanda Marshall',
    description: ['I knew from the beginning of my career I was highly interested in working with mamas and babies. During pregnancy the body goes through many changes and it is important for me to provide treatments to reduce pain and discomfort, as well as improve relaxation. As an RMT I believe in the physical and mental wellness of all moms.'],
    funFact: 'On the weekend I can be found providing therapeutic babies massages at a baby spa.',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379523/Faces_OM-_14_eo0blh.jpg',
  },
  {
    name: 'Angela Grivich',
    description: ['coming soon...'],
    funFact: 'coming soon...',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379523/Faces_OM-_8_io8qp4.jpg',
  },
  {
    name: 'Jodie MacGregor',
    description: ['I believe massage is the perfect medley of health and well-being. My special interest in health and rehabilitation led me to explore a career with Mama Mobile. I graduated with a B.A in Psychology before starting down the path to Massage Therapy. This path has allowed me to connect and help people become the healthiest happiest version of themselves. When I’m not working with our mamas you can find me hiking, travelling, or practicing my handstands in a yoga studio.'],
    funFact: 'I am an avid scuba diver and I hope to dive with humpback whales one day.',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379523/Faces_OM-_15_uercbe.jpg',
  },
  {
    name: 'Jessica Noskiewicz',
    description: ['I started my massage therapy education in 2015 but took a hiatus when I became pregnant with my daughter. Following my maternity leave, I returned to the Canadian College of Massage and Hydrotherapy to complete my education and graduated in May 2019. As a new mom, I became particularly interested in learning more about perinatal massage as it helped me so much during my own pregnancy. I took a course through Trimesters: Massage Therapy Education to study under leading experts in perinatal massage and learn specific assessment skills and treatment techniques that can be utilized in pre- and post-natal massage.'],
    funFact: 'Jessi embarked on a sailing trip with her parents at age 11 and spent five years travelling around the world! She’s visited over 40 countries and has a profound respect for cultural differences around the world.',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379523/Faces_OM-_20_stoufy.png',
  },
  {
    name: 'Zoe Luc',
    description: ['I treat pregnancies every week as a part of my practice and treating mamas is the best part of my day! Through my additional training in treating perinatal patients, I have treated both healthy and high risk pregnancies. In my practice, have seen great success with the therapeutic effects of massage therapy in helping mamas cope with stress, and aches and pains.  My approach to treatment is dynamic and aims to balance relaxation and mechanical effectiveness to optimize your mental and physical health.'],
    funFact: 'Outside of massage, Zoe enjoys keeping herself busy and healthy by doing yoga, taking walks, and exploring new places (near and far!). As healthy as she strives to be, she is a big foodie and enjoys talking about food as much as eating it!',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379523/Faces_OM-_11_k6j5zi.jpg',
  },
  {
    name: 'Nichola Baburam',
    description: ['coming soon...'],
    funFact: 'coming soon...',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379523/Faces_OM-_21_wlew7f.jpg',
  },
  {
    name: 'Shannyn Cui',
    description: ['coming soon...'],
    funFact: 'coming soon...',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379523/Faces_OM-_10_mghwxh.jpg',
  },
  {
    name: 'Rebecca Eves',
    description: ["Hello new parents and families of Guelph, my name is Rebecca. I am inspired to support healthy families within our community as a Registered Massage Therapist and Certified Doula. Holding space for clinical relaxation is a gift I am grateful to be able to facilitate. I believe massage therapy can help increase a parent's capacity to deal with the stresses of every day life. Looking to foster peace in the world, I can think of no better place than by supporting those who are raising the next generation. "],
    funFact: 'coming soon...',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379523/Faces_OM-_12_skszaa.jpg',
  },
  {
    name: 'Hasina Ireland',
    description: ['coming soon...'],
    funFact: 'coming soon...',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379523/Faces_OM-_13_gpedf9.jpg',
  },
  {
    name: 'Lindsay Finnie',
    description: [
      "Hi! I'm Lindsay (she/her). I found massage therapy when I was lost in an eating disorder. It was an unexpected experience but massage allowed me to slow down and learn to connect with my body and it quickly became integral to my recovery. Through my journey to becoming an RMT, I discovered a deep love working with the perinatal population and I've dedicated most of my professional career to learning all I can about pregnancy and childbirth. It brings me great happiness to work with people during such a transformational time and to offer them support through therapeutic touch is a fulfillment like no other. This love has also led me to becoming a birth doula and soon-to-be childbirth educator. It's my goal to help create safer and braver spaces for my clients to have the best pregnancy, birth and postpartum experiences possible. When I am not massaging or doula-ing, I can be found paddling out on a lake, snuggling at home with my cat Seamus, knitting, or cooking in my far-too-small kitchen."
    ],
    funFact: 'Coming Soon...',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1573280570/Faces_OM-_28_hsaw2j.jpg',
  },
  {
    name: 'Anjulee McIntosh',
    description: [
      "Having advanced training in lymph drainage and a passion for fascial-work, pre and postnatal massage quickly became my favourite specialty! I feel blessed every day to be able to help people reconnect with themselves while healing, strengthening and rejuvenating their bodies!",
    ],
    funFact: 'I grew up in Halifax, Nova Scotia. I spent 10 years traveling before becoming an RMT; I lived and worked in England and Australia.',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1572379524/Faces_OM-_24_1_rqrnln.jpg',
  },
  // {
  //   name: 'Danuta Debowski',
  //   description: [
  //     'I have been making mamas feel better for over 19 years! Through many hours of continuing education I have developed my own treatment style. A few of the courses I have taken are in Myofascial Release, Thai Yoga Massage, Accupuncture for pain relief  Trimesters Pregnancy, Delivery and Infant Massage.',  
  //   ],
  //   funFact: 'Danuta is a mama of 3, one being her giant fur baby!  In her spare time she loves to chill out on a beach and go for long walks.',
  //   img: comingSoon,
  // },
  // {
  //   name: 'Toni Sgro',
  //   description: [
  //     'I have a Kinesiology degree and Athletic Therapy certificate from York University and a diploma from Sutherland-Chan School of Massage Therapy',
  //     'I enjoy helping all patients (especially busy mamas!) to feel not only relaxed and soothed but also better and pain free after their treatments. When possible I can give some helpful pointers and self care which can help to prevent or manage discomfort.',  
  //   ],
  //   funFact: 'Coming Soon...',
  //   img: comingSoon,
  // },
  {
    name: 'Patricia MacNeil',
    description: [
      'I’ve been an RMT since 1986! I designed and supervised pre and perinatal and newborn massage therapy training programs for 5 massage therapy colleges in the Ottawa area. These internships were held at the Civic and General campuses of the Ottawa Hospital system for 15 years.',
    ],
    funFact: 'Patricia has the cutest standard poodle names Sophie!',
    img: 'https://res.cloudinary.com/dhze7gimq/image/upload/v1573280770/Faces_OM-_27_szjgku.jpg',
  },
  // {
  //   name: 'Amey McGurk',
  //   description: [
  //     "Coming Soon..."
  //   ],
  //   funFact: 'Coming Soon...',
  //   img: 'https://res.cloudinary.com/dhze7gimq/image/upload/c_pad,h_250,w_400/v1556064262/team/amey.jpg',
  // },
  // {
  //   name: 'Nadia Bonaldi',
  //   description: [
  //     "I have been in love with the world of wellness for as long as I can remember. Throughout my 20 years of experience as a Massage Therapist, I have had extensive training and the privilege to work alongside numerous therapists, holistic practitioners and midwives.",
  //     "After becoming a mom, I really felt the need to help women with motherhood. Offering moms massage therapy service to help ease physical discomforts, manage stress and facilitate this stage of transition.",
  //     "I am able to provide clients a therapeutic touch, getting deeper into mucle tissue, as needed, but also giving them a strong sense of relaxation.",
  //   ],
  //   funFact: 'Nadia is also a Hatha Yoga teacher and used a very effective Yoga breathing technique, known as "the three part breath", during childbirth herself.',
  //   img: comingSoon,
  // },
  // {
  //   name: 'Hasina Ireland',
  //   description: [
  //     "I have been committed to provide educational information and therapeutic assistance on building and maintaining wellness as a Registered Massage Therapist since 2018. The ability to assist mama's through their most precious phases in life is truly rewarding. I am in good standing with the Canadian Massage Therapists of Ontario, and the Canadian Association of Holistic Nutrition Professionals."
  //   ],
  //   funFact: 'I love nature, energy healing, cats, and write poetry',
  //   img: 'https://res.cloudinary.com/dhze7gimq/image/upload/c_pad,h_252,q_100,w_400/v1561658914/team/hasina.jpg',
  // },
  // {
  //   name: 'Nadia Bonaldi',
  //   description: [
  //     "I have been in love with the world of wellness for as long as I can remember. Throughout my 20 years of experience as a Massage Therapist, I have had extensive training and the privilege to work alongside numerous therapists, holistic practitioners and midwives.",
  //     "After becoming a mom, I really felt the need to help women with motherhood. Offering moms massage therapy service to help ease physical discomforts, manage stress and facilitate this stage of transition.",
  //     "I am able to provide clients a therapeutic touch, getting deeper into mucle tissue, as needed, but also giving them a strong sense of relaxation.",
  //   ],
  //   funFact: 'Nadia is also a Hatha Yoga teacher and used a very effective Yoga breathing technique, known as "the three part breath", during childbirth herself.',
  //   img: comingSoon,
  // },
  // {
  //   name: 'Amanda Marshall',
  //   description: [
  //     "I knew from the beginning of my career i was highly interested in working with mamas and babies. During pregnancy the body goes through many changes and it is important for me to provide treatments to reduce pain and discomfort, as well as improve relaxation. As an RMT I believe in the physical and mental wellness of all moms.",
  //   ],
  //   funFact: 'On the weekend I can be found providing therapeutic babies massages at a baby spa.',
  //   img: comingSoon,
  // },
  // {
  //   name: 'Tina Trinh',
  //   description: [
  //     "Coming Soon..."
  //   ],
  //   funFact: 'Coming Soon...',
  //   img: comingSoon,
  // },
]

export default Members;