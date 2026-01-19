import { prisma } from './prisma.js';

async function seedDatabase() {
  console.log('🌱 Starting database seeding...');

  // Clear existing data (order matters due to foreign key constraints)
  await prisma.orderItem.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.item.deleteMany();
  await prisma.user.deleteMany();

  console.log('🗑️  Cleared existing data');

  // Create Users
  const demoUser = await prisma.user.create({
    data: {
      email: 'demo123@farmland.com',
      password: 'demo123', // In production, this should be hashed!
      name: 'Demo User',
    },
  });

  const users = await prisma.user.createMany({
    data: [
      {
        email: 'sarah.johnson@email.com',
        password: 'password123',
        name: 'Sarah Johnson',
      },
      {
        email: 'mike.peterson@email.com',
        password: 'password123',
        name: 'Mike Peterson',
      },
      {
        email: 'emily.chen@email.com',
        password: 'password123',
        name: 'Emily Chen',
      },
    ],
  });

  console.log(`✅ Created ${users.count + 1} users (including demo123)`);

  // Create Farm Items with real Unsplash images
  const items = await prisma.item.createMany({
    data: [
      // Fresh Produce
      {
        name: 'Organic Tomatoes',
        description: 'Vine-ripened organic tomatoes, sweet and juicy. Perfect for salads and sauces. Locally grown.',
        imageUrl: 'https://images.unsplash.com/photo-1546470427-227bf0e2c44c?w=500&auto=format',
        price: 450, // $4.50 per lb
        inStock: true,
        rating: 4.8,
        category: 'f_n_v',
      },
      {
        name: 'Fresh Carrots',
        description: 'Crunchy organic carrots, rich in beta-carotene. Great for snacking or cooking.',
        imageUrl: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500&auto=format',
        price: 320,
        inStock: true,
        rating: 4.6,
        category: 'f_n_v',
      },
      {
        name: 'Green Lettuce',
        description: 'Crisp romaine lettuce, hydroponically grown. Perfect for fresh salads.',
        imageUrl: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?w=500&auto=format',
        price: 280,
        inStock: true,
        rating: 4.5,
        category: 'f_n_v',
      },
      {
        name: 'Red Bell Peppers',
        description: 'Sweet and crunchy red bell peppers, packed with vitamin C. Organically grown.',
        imageUrl: 'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=500&auto=format',
        price: 550,
        inStock: true,
        rating: 4.7,
        category: 'f_n_v',
      },
      {
        name: 'Organic Spinach',
        description: 'Fresh baby spinach leaves, rich in iron and vitamins. Perfect for salads and smoothies.',
        imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format',
        price: 380,
        inStock: true,
        rating: 4.9,
        category: 'f_n_v',
      },
      {
        name: 'Sweet Corn',
        description: 'Farm-fresh sweet corn, non-GMO. Delicious grilled or boiled.',
        imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500&auto=format',
        price: 420,
        inStock: true,
        rating: 4.7,
        category: 'f_n_v',
      },
      
      // Fruits
      {
        name: 'Honeycrisp Apples',
        description: 'Crisp and sweet honeycrisp apples from local orchards. Perfect snacking apple.',
        imageUrl: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&auto=format',
        price: 480,
        inStock: true,
        rating: 4.9,
        category: 'f_n_v',
      },
      {
        name: 'Fresh Strawberries',
        description: 'Sweet, juicy strawberries picked at peak ripeness. Great for desserts or eating fresh.',
        imageUrl: 'https://images.unsplash.com/photo-1543528176-61b239494933?w=500&auto=format',
        price: 650,
        inStock: true,
        rating: 4.8,
        category: 'f_n_v',
      },
      {
        name: 'Organic Blueberries',
        description: 'Plump organic blueberries, rich in antioxidants. Perfect for breakfast or baking.',
        imageUrl: 'https://images.unsplash.com/photo-1606800052052-2dcea3f2b2d6?w=500&auto=format',
        price: 720,
        inStock: true,
        rating: 4.7,
        category: 'f_n_v',
      },
      {
        name: 'Navel Oranges',
        description: 'Seedless navel oranges, bursting with vitamin C and fresh citrus flavor.',
        imageUrl: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500&auto=format',
        price: 540,
        inStock: true,
        rating: 4.6,
        category: 'f_n_v',
      },

      // Dairy & Eggs
      {
        name: 'Farm Fresh Eggs',
        description: 'Free-range brown eggs from happy hens. Rich golden yolks and superior taste.',
        imageUrl: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=500&auto=format',
        price: 580,
        inStock: true,
        rating: 4.9,
        category: 'dairy',
      },
      {
        name: 'Organic Whole Milk',
        description: 'Fresh organic whole milk from grass-fed cows. No hormones or antibiotics.',
        imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format',
        price: 650,
        inStock: true,
        rating: 4.8,
        category: 'dairy',
      },
      {
        name: 'Artisan Cheddar Cheese',
        description: 'Sharp aged cheddar cheese, handcrafted from local dairy. Rich and flavorful.',
        imageUrl: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=500&auto=format',
        price: 890,
        inStock: true,
        rating: 4.7,
        category: 'dairy',
      },

      // Specialty Items
      {
        name: 'Raw Honey',
        description: 'Pure raw honey from local beekeepers. Unfiltered and unpasteurized with natural enzymes.',
        imageUrl: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&auto=format',
        price: 1200,
        inStock: true,
        rating: 5.0,
        category: 'farm_goods',
      },
      {
        name: 'Sourdough Bread',
        description: 'Artisan sourdough bread, naturally leavened with a crispy crust and tangy flavor.',
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format',
        price: 680,
        inStock: true,
        rating: 4.8,
        category: 'farm_goods',
      },
      {
        name: 'Organic Free-Range Chicken',
        description: 'Whole organic chicken, raised without antibiotics on pasture. Superior flavor.',
        imageUrl: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format',
        price: 1850,
        inStock: true,
        rating: 4.9,
        category: 'meat',
      },
      {
        name: 'Fresh Basil',
        description: 'Fragrant organic basil, grown in our greenhouse. Perfect for Italian dishes.',
        imageUrl: 'https://images.unsplash.com/photo-1592417817038-d13fd7342850?w=500&auto=format',
        price: 320,
        inStock: true,
        rating: 4.6,
        category: 'f_n_v',
      },
      {
        name: 'Cherry Tomatoes',
        description: 'Sweet cherry tomatoes on the vine. Bursting with flavor, great for snacking.',
        imageUrl: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?w=500&auto=format',
        price: 520,
        inStock: true,
        rating: 4.8,
        category: 'f_n_v',
      },

      // Seasonal Items
      {
        name: 'Butternut Squash',
        description: 'Sweet and nutty butternut squash, perfect for roasting or making soup.',
        imageUrl: 'https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?w=500&auto=format',
        price: 380,
        inStock: true,
        rating: 4.5,
        category: 'f_n_v',
      },
      {
        name: 'Brussels Sprouts',
        description: 'Fresh Brussels sprouts, delicious roasted with olive oil and sea salt.',
        imageUrl: 'https://images.unsplash.com/photo-1614961185864-3bac37c696b2?w=500&auto=format',
        price: 420,
        inStock: true,
        rating: 4.4,
        category: 'f_n_v',
      },
      {
        name: 'Organic Kale',
        description: 'Nutrient-dense organic kale, perfect for salads, smoothies, or sautéing.',
        imageUrl: 'https://images.unsplash.com/photo-1582515073490-39981397c445?w=500&auto=format',
        price: 350,
        inStock: true,
        rating: 4.6,
        category: 'f_n_v',
      },
      {
        name: 'Russet Potatoes',
        description: 'Classic russet potatoes, great for baking, mashing, or making fries.',
        imageUrl: 'https://images.unsplash.com/photo-1471421298428-1513ab720a8e?w=500&auto=format',
        price: 280,
        inStock: true,
        rating: 4.5,
        category: 'f_n_v',
      },
    ],
  });

  console.log(`✅ Created ${items.count} farm items`);

  // Get all created items
  const allItems = await prisma.item.findMany();

  // Add items to demo user's cart
  await prisma.cartItem.createMany({
    data: [
      { userId: demoUser.id, itemId: allItems[0]!.id, quantity: 3 }, // Organic Tomatoes
      { userId: demoUser.id, itemId: allItems[6]!.id, quantity: 2 }, // Honeycrisp Apples
      { userId: demoUser.id, itemId: allItems[10]!.id, quantity: 1 }, // Farm Fresh Eggs
      { userId: demoUser.id, itemId: allItems[13]!.id, quantity: 1 }, // Raw Honey
      { userId: demoUser.id, itemId: allItems[4]!.id, quantity: 2 }, // Organic Spinach
    ],
  });

  console.log('🛒 Added items to demo user cart');

  // Create past orders for demo user
  await prisma.order.create({
    data: {
      userId: demoUser.id,
      createdAt: new Date('2026-01-10T10:30:00Z'),
      deliveryDate: new Date('2026-01-12T14:00:00Z'),
      orderItems: {
        create: [
          {
            itemId: allItems[7]!.id, // Strawberries
            quantity: 2,
            priceAtOrder: 650,
          },
          {
            itemId: allItems[11]!.id, // Organic Milk
            quantity: 1,
            priceAtOrder: 650,
          },
          {
            itemId: allItems[14]!.id, // Sourdough Bread
            quantity: 2,
            priceAtOrder: 680,
          },
        ],
      },
    },
  });

  await prisma.order.create({
    data: {
      userId: demoUser.id,
      createdAt: new Date('2026-01-05T15:45:00Z'),
      deliveryDate: new Date('2026-01-07T11:30:00Z'),
      orderItems: {
        create: [
          {
            itemId: allItems[0]!.id, // Organic Tomatoes
            quantity: 4,
            priceAtOrder: 450,
          },
          {
            itemId: allItems[3]!.id, // Red Bell Peppers
            quantity: 3,
            priceAtOrder: 550,
          },
          {
            itemId: allItems[1]!.id, // Fresh Carrots
            quantity: 2,
            priceAtOrder: 320,
          },
          {
            itemId: allItems[16]!.id, // Fresh Basil
            quantity: 2,
            priceAtOrder: 320,
          },
        ],
      },
    },
  });

  await prisma.order.create({
    data: {
      userId: demoUser.id,
      createdAt: new Date('2025-12-28T09:15:00Z'),
      deliveryDate: new Date('2025-12-30T13:00:00Z'),
      orderItems: {
        create: [
          {
            itemId: allItems[15]!.id, // Organic Chicken
            quantity: 1,
            priceAtOrder: 1850,
          },
          {
            itemId: allItems[10]!.id, // Farm Fresh Eggs
            quantity: 2,
            priceAtOrder: 580,
          },
          {
            itemId: allItems[21]!.id, // Russet Potatoes
            quantity: 3,
            priceAtOrder: 280,
          },
        ],
      },
    },
  });

  await prisma.order.create({
    data: {
      userId: demoUser.id,
      createdAt: new Date('2025-12-20T14:20:00Z'),
      deliveryDate: new Date('2025-12-22T16:00:00Z'),
      orderItems: {
        create: [
          {
            itemId: allItems[8]!.id, // Organic Blueberries
            quantity: 2,
            priceAtOrder: 720,
          },
          {
            itemId: allItems[7]!.id, // Fresh Strawberries
            quantity: 1,
            priceAtOrder: 650,
          },
          {
            itemId: allItems[13]!.id, // Raw Honey
            quantity: 1,
            priceAtOrder: 1200,
          },
          {
            itemId: allItems[4]!.id, // Organic Spinach
            quantity: 3,
            priceAtOrder: 380,
          },
        ],
      },
    },
  });

  console.log(`✅ Created 4 past orders for demo user`);

  // Create orders for other users
  const allUsers = await prisma.user.findMany();
  const otherUsers = allUsers.filter(u => u.email !== 'demo123@farmland.com');

  for (const user of otherUsers.slice(0, 2)) {
    const item1Index = Math.floor(Math.random() * allItems.length);
    let item2Index = Math.floor(Math.random() * allItems.length);
    // Ensure different items
    while (item2Index === item1Index) {
      item2Index = Math.floor(Math.random() * allItems.length);
    }
    
    const item1 = allItems[item1Index]!;
    const item2 = allItems[item2Index]!;
    
    await prisma.order.create({
      data: {
        userId: user.id,
        createdAt: new Date('2026-01-15T11:00:00Z'),
        deliveryDate: new Date('2026-01-17T15:00:00Z'),
        orderItems: {
          create: [
            {
              itemId: item1.id,
              quantity: Math.floor(Math.random() * 3) + 1,
              priceAtOrder: item1.price,
            },
            {
              itemId: item2.id,
              quantity: Math.floor(Math.random() * 2) + 1,
              priceAtOrder: item2.price,
            },
          ],
        },
      },
    });
  }

  console.log(`✅ Created orders for other users`);

  // Summary
  const totalUsers = await prisma.user.count();
  const totalItems = await prisma.item.count();
  const totalOrders = await prisma.order.count();
  const totalCartItems = await prisma.cartItem.count();

  console.log('\n📊 Database Seeding Complete!');
  console.log('================================');
  console.log(`👥 Users: ${totalUsers}`);
  console.log(`🛍️  Items: ${totalItems}`);
  console.log(`📦 Orders: ${totalOrders}`);
  console.log(`🛒 Cart Items: ${totalCartItems}`);
  console.log('\n🔑 Demo Account:');
  console.log('   Email: demo123@farmland.com');
  console.log('   Password: demo123');
  console.log('================================\n');
}

// Run the seed function
seedDatabase()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });