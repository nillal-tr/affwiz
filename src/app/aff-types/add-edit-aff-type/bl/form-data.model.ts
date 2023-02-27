type FormSubmit = {
  [key: string]: any;
};

export let submitFormObj: FormSubmit = {
  description: '',
  notes: '',
  tierCalcMethod: '',
  tiers: 0,
  cookieExp: 60,
  hideTrackingLinks: false,
  hideCratives: false,
  categories: [],
  minCommPayout: 0,
  perCopyTraderCommissionCheckbox: false,
  perCopyTraderCommissionComm: [
    {
      field1: 0,
      field2: 0,
      field3: 0,
      field4: 0,
      field5: 0,
      field6: 0,
      field7: 0,
    },
  ],
  perDepositCommissionCheckbox: false,
  perDepositCommissionComm: [
    {
      perDepositCommissionCommDropDown: '',
      CPACommission: [
        {
          field1: 0,
          field2: 0,
          field3: 0,
          field4: 0,
          field5: 0,
          field6: 0,
          field7: 0,
          openPositionRequired: false,
        },
      ],
      CPADCommission: [
        {
          CPADFTD: 0,
          percentOfDeposit: 0,
          minCommPerTrade: 0,
          extraPlan: [
            {
              field1: 0,
              field2: 0,
              field3: 0,
              field4: 0,
              field5: 0,
              field6: 0,
              field7: 0,
            },
            {
              field1: 0,
              field2: 0,
              field3: 0,
              field4: 0,
              field5: 0,
              field6: 0,
              field7: 0,
            },
            {
              field1: 0,
              field2: 0,
              field3: 0,
              field4: 0,
              field5: 0,
              field6: 0,
              field7: 0,
            },
            {
              field1: 0,
              field2: 0,
              field3: 0,
              field4: 0,
              field5: 0,
              field6: 0,
              field7: 0,
            },
          ],
          openPositionRequired: false,
        },
      ],
    },
  ],
  perSaleCommissionCheckbox: false,
  perSaleCommissionComm: [
    {
      field1: 0,
      field2: 0,
      field3: 0,
      field4: 0,
      field5: 0,
      field6: 0,
      field7: 0,
    },
  ],

  perLeadCommissionCheckbox: false,
  leadRate: 0,
  leadRatePerCountry: [],
  perRegCommissionCheckbox: false,
  regRate: 0,
  regRatePerCountry: [],
};

// submitFormArr = [
//   {
//     fieldName: 'description',
//     fieldValue: '',
//   },
//   {
//     fieldName: 'notes',
//     fieldValue: '',
//   },
//   {
//     fieldName: 'tierCalcMethod',
//     fieldValue: '',
//   },
//   {
//     fieldName: 'tiers',
//     fieldValue: 0,
//   },
//   {
//     fieldName: 'cookieExp',
//     fieldValue: 0,
//   },
//   {
//     fieldName: 'hideTrackingLinks',
//     fieldValue: false,
//   },
//   {
//     fieldName: 'hideCreatives',
//     fieldValue: false,
//   },
//   {
//     fieldName: 'categories',
//     fieldValue: [],
//   },
//   {
//     fieldName: 'commissionTypes',
//     fieldValue: [
//       {
//         fieldName: 'minCommissionPayout',
//         fieldValue: 0,
//       },
//       {
//         fieldName: 'copyTraderCheckbox',
//         fieldValue: false,
//       },
//       {
//         fieldName: 'copyTraderCommissions',
//         fieldValue: [
//           {
//             fieldName: 'field1',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field2',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field3',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field4',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field5',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field6',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field7',
//             fieldValue: 0,
//           },
//         ],
//       },
//       {
//         fieldName: 'depositCommissionCheckbox',
//         fieldValue: false,
//       },
//       {
//         fieldName: 'depositCommissionOption',
//         fieldValue: false,
//       },
//       {
//         fieldName: 'depositCommissionCPA',
//         fieldValue: [
//           {
//             fieldName: 'field1',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field2',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field3',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field4',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field5',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field6',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field7',
//             fieldValue: 0,
//           },
//         ],
//       },
//       {
//         fieldName: 'depositCommissionCPAD',
//         fieldValue: [
//           {
//             fieldName: 'CPADFTD',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'percentOfDeposit',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'minCommissionPerTrade',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'CPAExtraPlan',
//             fieldValue: [
//               {
//                 fieldName: 'firstExtraPlan',
//                 fieldValue: [
//                   {
//                     fieldName: 'field1',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field2',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field3',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field4',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field5',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field6',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field7',
//                     fieldValue: 0,
//                   },
//                 ],
//               },
//               {
//                 fieldName: 'secondExtraPlan',
//                 fieldValue: [
//                   {
//                     fieldName: 'field1',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field2',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field3',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field4',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field5',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field6',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field7',
//                     fieldValue: 0,
//                   },
//                 ],
//               },
//               {
//                 fieldName: 'thirdExtraPlan',
//                 fieldValue: [
//                   {
//                     fieldName: 'field1',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field2',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field3',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field4',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field5',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field6',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field7',
//                     fieldValue: 0,
//                   },
//                 ],
//               },
//               {
//                 fieldName: 'fourthExtraPlan',
//                 fieldValue: [
//                   {
//                     fieldName: 'field1',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field2',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field3',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field4',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field5',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field6',
//                     fieldValue: 0,
//                   },
//                   {
//                     fieldName: 'field7',
//                     fieldValue: 0,
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         fieldName: 'saleCheckbox',
//         fieldValue: false,
//       },
//       {
//         fieldName: 'saleCommissions',
//         fieldValue: [
//           {
//             fieldName: 'field1',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field2',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field3',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field4',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field5',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field6',
//             fieldValue: 0,
//           },
//           {
//             fieldName: 'field7',
//             fieldValue: 0,
//           },
//         ],
//       },
//       {
//         fieldName: 'leadCheckbox',
//         fieldValue: false,
//       },
//       {
//         fieldName: 'leadRate',
//         fieldValue: 0,
//       },
//       {
//         fieldName: 'leadRatePerCountry',
//         fieldValue: [],
//       },
//       {
//         fieldName: 'regCheckbox',
//         fieldValue: false,
//       },
//       {
//         fieldName: 'regRate',
//         fieldValue: 0,
//       },
//       {
//         fieldName: 'regRatePerCountry',
//         fieldValue: [],
//       },
//     ],
//   },
// ];

// let finalObj: any = {
//   registrationRatePerCountryValue: {}
// }

// finalObj['dsfs'] = 'asd';

// update(key, value) {
//   finalObj[key] = value;
// }