'use client';

import { motion, useMotionValue, useSpring, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const images = [
  { src: '/sweetshop.png', alt: 'AI Generated Art 1', width: 600, height: 850 },
  { src: '/ChapalStore.jpg', alt: 'AI Generated Art 2', width: 550, height: 700 },
  { src: '/dates_nutritional_2.png', alt: 'AI Generated Art 3', width: 650, height: 900 },
  { src: '/baklawa_nutrition_1.png', alt: 'AI Generated Art 4', width: 750, height: 700 },
  { src: '/Imagine_a_whimsical_and_fun_scene_where_the_Statue_of_Liberty_the_iconic_symbol_o_mnlIMLP.png', alt: 'AI Generated Art 5', width: 700, height: 1000 },
  { src: '/happydiwali.jpg', alt: 'AI Generated Art 6', width: 500, height: 650 },
  { src: '/inputMessage_inputMessage_prize_distribution__subject__artform_realistic_photo_ty_t2kPrWt.png', alt: 'AI Generated Art 7', width: 600, height: 800 },
  { src: '/inputMessage_person_hoisting_flag_on_indian_independence_day_subject_person_gende_rbhhQBD.png', alt: 'AI Generated Art 8', width: 655, height: 755 },
  { src: '/dates_nutritional_3.png', alt: 'AI Generated Art 9', width: 600, height: 900 },
  { src: '/TigerHelmet.jpg', alt: 'AI Generated Art 10', width: 750, height: 650 },
  { src: '/inputMessage_inputMessage_Imagine_a_vibrant_and_eye-catching_scene_in_the_heart_o_epEdilf.png', alt: 'AI Generated Art 11', width: 700, height: 750 },
  { src: '/img-Gb1zK0cXfAiL7F86F0qLrrcU.png', alt: 'AI Generated Art 12', width: 600, height: 900 },
  { src: '/rncos_sample.jpg', alt: 'AI Generated Art 13', width: 580, height: 720 },
  { src: '/tailor_prompt.png', alt: ' AI generated art14', width: 900, height: 800 },
  { src: '/jain_5.jpg', alt: ' AI generated art15', width: 550, height: 670 },
  { src: '/inputMessage_inputMessage_good_boy_subject_muscular_look_artform_Photography_phot_FRgKXHC.png', alt: ' AI generated art16', width: 800, height: 820 },
  { src: '/thumbnail_style_2.png', alt: ' AI generated art17', width: 650, height: 750 },
  { src: '/tanishm72@gmail.com_output.jpg', alt: ' AI generated art18', width: 500, height: 900 },
  { src: '/Picture_a_close-up_LEGO_scene_with_an_AI_robot_sitting_confidently_at_a_desk_wear_ta1QyUW.png', alt: ' AI generated art19', width: 800, height: 850 },
  { src: '/metalware_4.png', alt: ' AI generated art20', width: 620, height: 720 },
  { src: '/jain_5.jpg', alt: ' AI generated art21', width: 590, height: 790 },
  { src: '/inputMessage_inputMessage_prize_distribution__subject__artform_realistic_photo_ty_t2kPrWt.png', alt: ' AI generated art22', width: 680, height: 880 },
  { src: '/inputMessage_inputMessage_Imagine_a_vibrant_and_eye-catching_scene_in_the_heart_o_epEdilf.png', alt: ' AI generated art23', width: 800, height: 1000 },
  { src: '/inputMessage_inputMessage_good_boy_subject_muscular_look_artform_Photography_phot_6TIkKhV.png', alt: ' AI generated art24', width: 850, height: 850 },
  { src: '/inputMessage_inputMessage_cute_baby__drinking_chocolate_milk_on_sun_subject_cuten_fEC9mvC.png', alt: ' AI generated art25', width: 710, height: 890 },
  { src: '/inputMessage_inputMessage_baby_wearing_iron_man_suit_with__the_iron_man_helmet_in_2NIUTo0.png', alt: ' AI generated art26', width: 870, height: 670 },
  { src: '/inputMessage_good_boy_subject_muscular_look_artform_Photography_photo_type_Front__RjkJUfs.png', alt: ' AI generated art27', width: 780, height: 780 },
  { src: '/inputMessage_best_belts_subject_belt_design_photo_type_Disabled_place_on_a_beach__YUvs2Es.png', alt: ' AI generated art28', width: 920, height: 820 },
  { src: '/inputMessage_a_small_school_girl_with_mother_holding_her_hand_subject__gender_fem_Tqc6skK.png', alt: ' AI generated art29', width: 770, height: 970 },
  { src: '/jain_5.jpg', alt: ' AI generated art30', width: 590, height: 790 },
  { src: '/TreasureBeach.png', alt: 'AI Generated Art 31', width: 720, height: 820 },
  { src: '/closeupbaklawa.png', alt: 'AI Generated Art 32', width: 650, height: 750 },
  { src: '/inputMessage_inputMessage_baby_wearing_iron_man_suit_with__the_iron_man_helmet_in_2NIUTo0.png', alt: 'AI Generated Art 33', width: 800, height: 900 },
  { src: '/closeupbaklawa.png', alt: 'AI Generated Art 34', width: 660, height: 760 },
  { src: '/palace.png', alt: 'AI Generated Art 35', width: 740, height: 840 },
  { src: '/inputMessage_inputMessage_Imagine_a_vibrant_and_eye-catching_scene_in_the_heart_o_epEdilf.png', alt: ' AI generated art36', width: 800, height: 1000 },
  { src: '/inputMessage_inputMessage_good_boy_subject_muscular_look_artform_Photography_phot_6TIkKhV.png', alt: ' AI generated art37', width: 850, height: 850 },
  { src: '/inputMessage_inputMessage_cute_baby__drinking_chocolate_milk_on_sun_subject_cuten_fEC9mvC.png', alt: ' AI generated art38', width: 710, height: 890 },
  { src: '/inputMessage_inputMessage_baby_wearing_iron_man_suit_with__the_iron_man_helmet_in_2NIUTo0.png', alt: ' AI generated art39', width: 870, height: 670 },
  { src: '/inputMessage_good_boy_subject_muscular_look_artform_Photography_photo_type_Front__RjkJUfs.png', alt: ' AI generated art40', width: 780, height: 780 },
  { src: '/statueofliberty.png', alt: 'AI Generated Art 41', width: 760, height: 860 },
  { src: '/babykrishna.png', alt: 'AI Generated Art 42', width: 810, height: 910 },
  { src: '/statueofliberty.png', alt: 'AI Generated Art 43', width: 640, height: 740 },
  { src: '/happydiwali', alt: 'AI Generated Art 44', width: 500, height: 650 },
  { src: '/inputMessage_inputMessage_prize_distribution__subject__artform_realistic_photo_ty_t2kPrWt.png', alt: 'AI Generated Art 45', width: 600, height: 800 },
  { src: '/inputMessage_person_hoisting_flag_on_indian_independence_day_subject_person_gende_rbhhQBD.png', alt: 'AI Generated Art 46', width: 655, height: 755 },
  { src: '/LORDGANESH.png', alt: 'AI Generated Art 47', width: 780, height: 880 },
  { src: '/statueofliberty.png', alt: 'AI Generated Art 48', width: 840, height: 940 },
  { src: '/babykrishna.png', alt: 'AI Generated Art 49', width: 660, height: 760 },
  { src: '/4yroldkrishna.png', alt: 'AI Generated Art 50', width: 790, height: 890 },
  { src: '/LORDGANESH.png', alt: 'AI Generated Art 51', width: 850, height: 950 },
  { src: '/authentic_baklawa_in_india_tanishm72gmail.com.png', alt: 'AI Generated Art 52', width: 670, height: 770 },
  { src: '/Imagine_a_scene_where_blue_Baby_Krishna_at_the_tender_age_of_four_sits_gleefully__Mm1wTNI.png', alt: 'AI Generated Art 53', width: 800, height: 900 },
  { src: '/Imagine_a_whimsical_and_fun_scene_where_the_Statue_of_Liberty_the_iconic_symbol_o_mnlIMLP.png', alt: 'AI Generated Art 54', width: 860, height: 960 },
  { src: '/Imagine_a_wide-angle_scene_featuring_a_super_cute_four-year-old_Baby_Krishna_radi_GvGHVVy.png', alt: 'AI Generated Art 55', width: 680, height: 780 },
  { src: '/Imagine_a_wide-angle_scene_featuring_an_irresistibly_cute_four-year-old_Baby_Kris_QAvyQ6W.png', alt: 'AI Generated Art 56', width: 810, height: 910 },
  { src: '/Imagine_a_wide-angle_shot_of_a_bustling_Mumbai_street_with_the_iconic_Gateway_of__qB6qtYK.png', alt: 'AI Generated Art 57', width: 870, height: 970 },
  { src: '/Imagine_an_enchanting_animated_close-up_of_Lord_Ganesha_the_beloved_deity_of_wisd_jPIpBUh.png', alt: 'AI Generated Art 58', width: 690, height: 790 },
  { src: '/Picture_a_close-up_LEGO_scene_with_an_AI_robot_sitting_confidently_at_a_desk_wear_ta1QyUW.png', alt: 'AI Generated Art 59', width: 820, height: 920 },
  { src: '/CyborgCat.jpg', alt: 'AI Generated Art 60', width: 880, height: 980 },
  { src: '/Imagine_a_whimsical_and_fun_scene_where_the_Statue_of_Liberty_the_iconic_symbol_o_mnlIMLP.png', alt: 'AI Generated Art 61', width: 700, height: 800 },
  { src: '/Imagine_a_scene_where_blue_Baby_Krishna_at_the_tender_age_of_four_sits_gleefully__Mm1wTNI.png', alt: 'AI Generated Art 62', width: 830, height: 930 },
  { src: '/CatMilk.jpg', alt: 'AI Generated Art 63', width: 890, height: 990 },
  { src: '/Imagine_an_enchanting_animated_close-up_of_Lord_Ganesha_the_beloved_deity_of_wisd_jPIpBUh.png', alt: 'AI Generated Art 64', width: 710, height: 810 },
  { src: '/MALEARRCHITECT.jpg', alt: 'AI Generated Art 65', width: 840, height: 940 },
  { src: '/ChapalStore.jpg', alt: 'AI Generated Art 66', width: 900, height: 1000 },
  { src: '/sunsetdance.jpg', alt: 'AI Generated Art 67', width: 720, height: 820 },
  { src: '/DALLÂ·E 2024-12-02 12.06.48 - A surreal depiction of a tempest brewing within a porcelain teacup, showcasing a miniature ocean in chaos. The deep blue and gray waves, with foam-tip.jpg', alt: 'AI Generated Art 68', width: 850, height: 950 },
  { src: '/CatMilk.jpg', alt: 'AI Generated Art 69', width: 730, height: 830 },
  { src: '/Picture_a_close-up_LEGO_scene_with_an_AI_robot_sitting_confidently_at_a_desk_wear_ta1QyUW.png', alt: 'AI Generated Art 70', width: 860, height: 960 },
  { src: '/Imagine_a_scene_where_blue_Baby_Krishna_at_the_tender_age_of_four_sits_gleefully__Mm1wTNI.png', alt: 'AI Generated Art 71', width: 740, height: 840 },
  { src: '/Imagine_a_whimsical_and_fun_scene_where_the_Statue_of_Liberty_the_iconic_symbol_o_mnlIMLP.png', alt: 'AI Generated Art 72', width: 870, height: 970 },
  { src: '/Imagine_a_scene_where_blue_Baby_Krishna_at_the_tender_age_of_four_sits_gleefully__Mm1wTNI.png', alt: 'AI Generated Art 73', width: 750, height: 850 },
  { src: '/Imagine_a_wide-angle_scene_featuring_a_super_cute_four-year-old_Baby_Krishna_radi_GvGHVVy.png', alt: 'AI Generated Art 74', width: 880, height: 980 },
  { src: '/Picture_a_close-up_LEGO_scene_with_an_AI_robot_sitting_confidently_at_a_desk_wear_ta1QyUW.png', alt: 'AI Generated Art 75', width: 760, height: 860 },
];

function FloatingImagesComponent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const controls = useAnimation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      setIsLoaded(true);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !isLoaded) return;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      mouseX.set(-(e.clientX - centerX));
      mouseY.set(-(e.clientY - centerY));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, dimensions, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    controls.start((i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05 },
    }));
  }, [controls, isLoaded]);

  if (!isLoaded) {
    return <div className="min-h-screen" />;
  }

  // Helper function to check if a position overlaps with existing images
  const checkOverlap = (
    x: number, 
    y: number, 
    width: number, 
    height: number, 
    positions: Array<{ x: number, y: number, width: number, height: number }>
  ) => {
    const spacing = 20; // Consistent minimum spacing
    
    return positions.some(pos => {
      // Check if rectangles overlap with spacing buffer
      return !(
        x + width + spacing < pos.x ||    // New image is completely to the left
        x > pos.x + pos.width + spacing || // New image is completely to the right
        y + height + spacing < pos.y ||    // New image is completely above
        y > pos.y + pos.height + spacing   // New image is completely below
      );
    });
  };

  // Calculate all image positions beforehand
  const getImagePositions = () => {
    const positions: Array<{ x: number, y: number, width: number, height: number }> = [];
    const containerWidth = dimensions.width * 2;
    const containerHeight = dimensions.height * 2;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    
    // Common aspect ratios and their weights (higher weight = more common)
    const aspectRatios = [
      { ratio: 1/1, weight: 3 },    // Square (1:1)
      { ratio: 4/3, weight: 4 },    // Standard (4:3)
      { ratio: 3/4, weight: 4 },    // Portrait (3:4)
      { ratio: 16/9, weight: 3 },   // Widescreen (16:9)
      { ratio: 9/16, weight: 3 },   // Mobile (9:16)
      { ratio: 3/2, weight: 5 },    // Classic Photo (3:2)
      { ratio: 2/3, weight: 5 },    // Portrait Photo (2:3)
      { ratio: 21/9, weight: 1 },   // Ultrawide (21:9)
      { ratio: 1/1.41, weight: 2 }, // A4 Paper (√2:1)
      { ratio: 5/4, weight: 2 }     // Large Format (5:4)
    ];

    // Create weighted array for random selection
    const weightedRatios = aspectRatios.flatMap(({ ratio, weight }) => 
      Array(weight).fill(ratio)
    );
    
    const sortedImages = [...images].sort((a, b) => 
      (b.width * b.height) - (a.width * a.height)
    );
    
    sortedImages.forEach((image, index) => {
      const minSize = 190;
      const maxSize = 315;
      const baseSize = Math.floor(Math.random() * (maxSize - minSize) + minSize);
      
      const aspectRatio = weightedRatios[Math.floor(Math.random() * weightedRatios.length)];
      
      let width, height;
      if (aspectRatio >= 1) {
        width = baseSize;
        height = baseSize / aspectRatio;
      } else {
        height = baseSize;
        width = baseSize * aspectRatio;
      }

      width = Math.round(width);
      height = Math.round(height);

      let x = 0;
      let y = 0;
      let found = false;
      let radius = 0;
      const angleStep = Math.PI / 24; // More angular positions
      
      if (index === 0) {
        x = centerX - width / 2;
        y = centerY - height / 2;
        found = true;
      } else {
        while (!found && radius < Math.max(containerWidth, containerHeight) / 2) {
          for (let angle = 0; angle < 2 * Math.PI && !found; angle += angleStep) {
            // Add more horizontal variation
            const horizontalBias = Math.random() * 60 - 30; // Random offset between -30 and 30
            const randomRadius = radius + (Math.random() * 40 - 20);
            const randomAngle = angle + (Math.random() * angleStep * 0.5);
            
            x = centerX + randomRadius * Math.cos(randomAngle) - width / 2 + horizontalBias;
            y = centerY + randomRadius * Math.sin(randomAngle) - height / 2;

            if (x >= 50 && x + width <= containerWidth - 50 && 
                y >= 50 && y + height <= containerHeight - 50) {
              if (!checkOverlap(x, y, width, height, positions)) {
                found = true;
                break;
              }
            }
          }
          radius += 30;
        }

        // Grid fallback with horizontal variation
        if (!found) {
          const gridSize = 30;
          for (let gridY = 50; gridY < containerHeight - 50 && !found; gridY += gridSize) {
            for (let gridX = 50; gridX < containerWidth - 50 && !found; gridX += gridSize) {
              const horizontalOffset = Math.random() * 40 - 20; // Random offset between -20 and 20
              if (!checkOverlap(gridX + horizontalOffset, gridY, width, height, positions)) {
                x = gridX + horizontalOffset;
                y = gridY;
                found = true;
                break;
              }
            }
          }
        }

        // Random fallback with increased horizontal range
        if (!found) {
          let attempts = 0;
          const maxAttempts = 100;
          while (!found && attempts < maxAttempts) {
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * Math.min(containerWidth, containerHeight) / 3;
            const horizontalStretch = Math.random() * 80 - 40; // Increased horizontal variation
            x = centerX + distance * Math.cos(angle) - width / 2 + horizontalStretch;
            y = centerY + distance * Math.sin(angle) - height / 2;

            if (x >= 50 && x + width <= containerWidth - 50 && 
                y >= 50 && y + height <= containerHeight - 50) {
              if (!checkOverlap(x, y, width, height, positions)) {
                found = true;
              }
            }
            attempts++;
          }
        }
      }

      if (found) {
        positions.push({ x, y, width, height });
      }
    });

    return positions.sort((a, b) => {
      const distA = Math.hypot((a.x + a.width/2) - centerX, (a.y + a.height/2) - centerY);
      const distB = Math.hypot((b.x + b.width/2) - centerX, (b.y + b.height/2) - centerY);
      return distA - distB;
    });
  };

  const imagePositions = getImagePositions();

  return (
    <div className="relative w-[200vw] h-[200vh] left-[-50vw] top-[-50vh]" style={{ overflow: 'hidden' }}>
      {images.map((image, index) => {
        const factor = (index % 3 + 1) * 0.3;
        const position = imagePositions[index] || { x: 0, y: 0, width: 0, height: 0 };

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${(position.x / (dimensions.width * 2)) * 100}%`,
              top: `${(position.y / (dimensions.height * 2)) * 100}%`,
              width: `${position.width}px`,
              height: `${position.height}px`,
              x: smoothMouseX,
              y: smoothMouseY,
              scale: 1,
              transformStyle: 'preserve-3d',
              transform: `perspective(1000px) translateX(calc(${factor} * var(--motion-x))) translateY(calc(${factor} * var(--motion-y)))`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            custom={index}
            whileHover={{ 
              scale: 1.1, 
              zIndex: 50,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
              }
            }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden cursor-pointer w-full h-full" 
              whileHover={{
                boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}
              initial={{ filter: 'blur(10px)' }}
              animate={{ filter: 'blur(0px)' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              />
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

// Export a version that's always client-side
export default dynamic(() => Promise.resolve(FloatingImagesComponent), {
  ssr: false
});
