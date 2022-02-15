exports.seed = (knex) => {
    return knex('exercise').del()
      .then(() => {
        return knex('exercise').insert([
            {
              id: 1001, 
              name: 'Pogo Jumps', 
              type: 'Speed Types - KD', 
              instruction: '', 
              image: '',
              youtube_link: 'https://youtu.be/22Hgs0XvcDs?t=69'
            },
            {
              id: 1002, 
              name: 'Depth Jump to split squat', 
              type: 'Speed Types - KD', 
              instruction: '', 
              image: '',
              youtube_link: 'https://youtu.be/22Hgs0XvcDs?t=111'
            },
            {
              id: 1003, 
              name: 'Rear foot elevated split squat', 
              type: 'Speed Types - KD', 
              instruction: '', 
              image: '',
              youtube_link: 'https://youtu.be/22Hgs0XvcDs?t=173'
            },
            {
              id: 1004, 
              name: 'Dumbbell Jump Squat', 
              type: 'Spring Types - Michael Jordan', 
              instruction: '', 
              image: '',
              youtube_link: 'https://youtu.be/22Hgs0XvcDs?t=256'
            },
            {
              id: 1005, 
              name: 'Explosive Step up', 
              type: 'Spring Types - Michael Jordan', 
              instruction: '', 
              image: '',
              youtube_link: 'https://youtu.be/22Hgs0XvcDs?t=338'
            },
            {
              id: 1006, 
              name: 'Kettle Bell Swing', 
              type: 'Spring Types - Michael Jordan', 
              instruction: '', 
              image: '',
              youtube_link: 'https://youtu.be/22Hgs0XvcDs?t=406'
            },
            {
              id: 1007, 
              name: 'One Legged lateral hop', 
              type: 'Strength Types - Wilt Chamberlain', 
              instruction: '', 
              image: '',
              youtube_link: 'https://youtu.be/22Hgs0XvcDs?t=489'
            },
            {
              id: 1008, 
              name: 'Depth Drop', 
              type: 'Strength Types - Wilt Chamberlain', 
              instruction: '', 
              image: '',
              youtube_link: 'https://youtu.be/22Hgs0XvcDs?t=539'
            },
            {
              id: 1009, 
              name: 'Tuck Jumps', 
              type: 'Strength Types - Wilt Chamberlain', 
              instruction: '', 
              image: '',
              youtube_link: 'https://youtu.be/22Hgs0XvcDs?t=637'
            },
            
        ])
      })
  }