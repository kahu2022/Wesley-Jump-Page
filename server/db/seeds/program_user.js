exports.seed = (knex) => {
    return knex('program_user').del()
      .then(() => {
        return knex('program_user').insert([
            {
              id: 5001, 
              user_id: 6001, 
              program_id: 4001, 
              user_goals: '"To dunk a 10ft Basketball Hoop" - WT', 
              initial_testing: '{"date": "2021-12-22","height": "1660mm 5.45ft", "h": 1660, "hft": 5.45,"standing_reach": "2130mm 6.99ft", "sr": 2130, "srft": 6.99,"jumping_reach": "2560mm 8.40ft", "jr": 2560, "jrft": 8.4,"running_jump_reach": "2630mm 8.63ft", "rjr": 2630, "rjrft": 8.63,"standing_vertical": "430mm or 17inch", "sv": 430, "svin": 17,"running_jump_vertical": "500mm or 19inch", "rjv": 500, "rjvin": 19}',
              mid_testing: '{"date": "", "height": "", "h": 0, "hft": 0,"standing_reach": "", "sr": 0, "srft": 0,"jumping_reach": "", "jr": 0, "jrft": 0,"running_jump_reach": "", "rjr": 0, "rjrft": 0,"standing_vertical": "", "sv": 0, "svin": 0,"running_jump_vertical": "", "rjv": 0, "rjvin": 0}',
              final_testing: '{"date": "", "height": "", "h": 0, "hft": 0,"standing_reach": "", "sr": 0, "srft": 0,"jumping_reach": "", "jr": 0, "jrft": 0,"running_jump_reach": "", "rjr": 0, "rjrft": 0,"standing_vertical": "", "sv": 0, "svin": 0,"running_jump_vertical": "", "rjv": 0, "rjvin": 0}',
              target_values: '{"target": "3230mm 10.6ft", "t": 3230, "tft": 10.6, "gap_to_increase": "600mm or 23.62inches", "gti": 600, "gtii": 23.62, "goal": "Is to increase Your Current Vertical by 23.62 Inches in order to achieve Dunk with a Ball."}',
              start_date: Date('2021-12-22'),
              mid_point_date: Date('2022-03-22'),
              end_date: Date('2022-05-22'),
              status: 'In Progress',
              images: 'images/received_447607760297511.jpeg',
              notes: ''
            }
        ])
      })
  }
