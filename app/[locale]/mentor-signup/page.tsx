// 'use client'
// import {useTranslations} from 'next-intl';
// import {useState, useEffect} from 'react'
// import React from 'react'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod';
// import type {FieldValues} from 'react-hook-form'
// import { z } from 'zod';
// import { Resend } from 'resend';
// import { sendEmail } from '@/app/Components/email/mentor'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'





// export default function InstSign() {
// const [number, setNumber] = React.useState('')
// const [valid, isValid] = React.useState(false)

// // number validity
//     const handleChange = (v:any) => {
//         setNumber(v);
//         if(number.length < 7) {
//             isValid(false)
//         }
//          else {
//             isValid(true)
//          }
//         }
// // translation types
// const t = useTranslations('Form');
// type FormFields = {
//     email: string;
//     expertise: string;
//     years: number;
//     languages: string;
//     firstName: string;
//     lastName: string;
//     sessionPrice: number;
//     introVid: string;
//     country: string;
    
    
// }


// const {
//     register,
//     handleSubmit,
//     watch,
//     formState: {errors, isSubmitting},
//     reset,
//     getValues,
// } = useForm<FormFields>({
//     defaultValues: {}

// });

//  //onSubmit
// const onSubmit: SubmitHandler<FormFields> = async (data:FieldValues) => {
//   try {
//     const response = await fetch('https://3amalycourses.com/ar/api/mentor', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({...data, number}),
//     });
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const dataStuff = await response.json();
//     setNumber('')
//     reset();
//     alert('Your application has been sent!')
//     console.log(data);
//   } catch (error) {
//     console.error('Error submitting form:');
//     alert('There was an error submitting your application. Please try again.');
//   }
// }


//     return(
//        <div>
//          {/* Mentor Form */}
// <form onSubmit={handleSubmit(onSubmit)} className="max-w-60 md:max-w-md mx-auto mt-5 ">
//     <h1 className="text-3xl mb-5">
//         {t('title')}
//     </h1>
//     <div className="md:grid md:grid-cols-2 md:gap-3">
//         {/* First Name */}
//     <div className="relative z-0 w-full group">
//         <input {
//             ...register("firstName")
//         } type="text" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
//         <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t('first')}</label>
//     </div>
//     {/* Last Name */}
//     <div className="relative z-0 w-full mb-5 group">
//         <input {
//             ...register("lastName")
//         } type="text" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
//         <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t('last')}</label>
//     </div>
    
    
    
//     <div className="md:relative z-0 md:w-full mb-5 group">
//     <label className=''>رقم التليفون</label>
// <span className=''>
// <PhoneInput
// containerClass=''
// inputClass=''
// buttonClass=''
// dropdownClass=''
// searchClass=''
// country={'eg'}
// value={number}
// onChange={handleChange}
// inputProps={{
//     required: true
// }}
// />

// {!valid && <p className='text-red-600'>Please enter a valid Phone Number</p>}
// </span>
//     </div>
//   </div>
//   <div className="relative z-0 w-full mb-5 group">
//       <input {
//         ...register("email")
//       } type="email"  id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-black" placeholder=" "  />
// {errors.email && <p className="text-red-600"></p>}

//       <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t('email')}</label>
//   </div>

//   <div className="relative z-0 w-full mb-5 group">
//       <input {
//     ...register("expertise", {
//         required: true
//     })
//   }  type="text" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
//       <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t('expertise')}</label>
    
//   </div>
//   <div className="relative z-0 w-full mb-5 group">
//       <input {
//       ...register("years", {
//         required: true
//       })
//       }  type="number" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
//       <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t('years')}</label>
//   </div>
//   <div className="relative z-0 w-full mb-5 group">
//       <input {
//       ...register("languages", {
//         required: true
//       })
//       }type="text" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
//       <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t('languages')}</label>
//   </div>
//   <div className="relative z-0 w-full mb-5 group">
//       <input {
//     ...register("sessionPrice", {
//         required: true
//     })
//   }  type="number" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
//       <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t('price')}</label>
    
//   </div>
//   {/* Youtube Link */}
//   <div className="relative z-0 w-full mb-5 group">
//       <input {
//     ...register("introVid", {
//         required: true
//     })
//   }  type="text" id="" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pt-12 md:pt-4" placeholder=" "  />
//       <label  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t('you')}</label>
    
//   </div>
 
//   <div className="grid md:grid-cols-2 md:gap-6">
   
// {/* countries dropdown */}
//     <div className="relative z-0 w-full mb-5 group">
//         <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t('country')}</label>
//         <select {
//             ...register("country")
//         } id="country" name="country" className="form-control block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
//                 <option value="Afghanistan">Afghanistan</option>
//                 <option value="Åland Islands">Åland Islands</option>
//                 <option value="Albania">Albania</option>
//                 <option value="Algeria">Algeria</option>
//                 <option value="American Samoa">American Samoa</option>
//                 <option value="Andorra">Andorra</option>
//                 <option value="Angola">Angola</option>
//                 <option value="Anguilla">Anguilla</option>
//                 <option value="Antarctica">Antarctica</option>
//                 <option value="Antigua and Barbuda">Antigua and Barbuda</option>
//                 <option value="Argentina">Argentina</option>
//                 <option value="Armenia">Armenia</option>
//                 <option value="Aruba">Aruba</option>
//                 <option value="Australia">Australia</option>
//                 <option value="Austria">Austria</option>
//                 <option value="Azerbaijan">Azerbaijan</option>
//                 <option value="Bahamas">Bahamas</option>
//                 <option value="Bahrain">Bahrain</option>
//                 <option value="Bangladesh">Bangladesh</option>
//                 <option value="Barbados">Barbados</option>
//                 <option value="Belarus">Belarus</option>
//                 <option value="Belgium">Belgium</option>
//                 <option value="Belize">Belize</option>
//                 <option value="Benin">Benin</option>
//                 <option value="Bermuda">Bermuda</option>
//                 <option value="Bhutan">Bhutan</option>
//                 <option value="Bolivia">Bolivia</option>
//                 <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
//                 <option value="Botswana">Botswana</option>
//                 <option value="Bouvet Island">Bouvet Island</option>
//                 <option value="Brazil">Brazil</option>
//                 <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
//                 <option value="Brunei Darussalam">Brunei Darussalam</option>
//                 <option value="Bulgaria">Bulgaria</option>
//                 <option value="Burkina Faso">Burkina Faso</option>
//                 <option value="Burundi">Burundi</option>
//                 <option value="Cambodia">Cambodia</option>
//                 <option value="Cameroon">Cameroon</option>
//                 <option value="Canada">Canada</option>
//                 <option value="Cape Verde">Cape Verde</option>
//                 <option value="Cayman Islands">Cayman Islands</option>
//                 <option value="Central African Republic">Central African Republic</option>
//                 <option value="Chad">Chad</option>
//                 <option value="Chile">Chile</option>
//                 <option value="China">China</option>
//                 <option value="Christmas Island">Christmas Island</option>
//                 <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
//                 <option value="Colombia">Colombia</option>
//                 <option value="Comoros">Comoros</option>
//                 <option value="Congo">Congo</option>
//                 <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
//                 <option value="Cook Islands">Cook Islands</option>
//                 <option value="Costa Rica">Costa Rica</option>
//                 <option value="Cote D&apos;ivoire">Cote D&apos;ivoire</option>
//                 <option value="Croatia">Croatia</option>
//                 <option value="Cuba">Cuba</option>
//                 <option value="Cyprus">Cyprus</option>
//                 <option value="Czech Republic">Czech Republic</option>
//                 <option value="Denmark">Denmark</option>
//                 <option value="Djibouti">Djibouti</option>
//                 <option value="Dominica">Dominica</option>
//                 <option value="Dominican Republic">Dominican Republic</option>
//                 <option value="Ecuador">Ecuador</option>
//                 <option value="Egypt">Egypt</option>
//                 <option value="El Salvador">El Salvador</option>
//                 <option value="Equatorial Guinea">Equatorial Guinea</option>
//                 <option value="Eritrea">Eritrea</option>
//                 <option value="Estonia">Estonia</option>
//                 <option value="Ethiopia">Ethiopia</option>
//                 <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
//                 <option value="Faroe Islands">Faroe Islands</option>
//                 <option value="Fiji">Fiji</option>
//                 <option value="Finland">Finland</option>
//                 <option value="France">France</option>
//                 <option value="French Guiana">French Guiana</option>
//                 <option value="French Polynesia">French Polynesia</option>
//                 <option value="French Southern Territories">French Southern Territories</option>
//                 <option value="Gabon">Gabon</option>
//                 <option value="Gambia">Gambia</option>
//                 <option value="Georgia">Georgia</option>
//                 <option value="Germany">Germany</option>
//                 <option value="Ghana">Ghana</option>
//                 <option value="Gibraltar">Gibraltar</option>
//                 <option value="Greece">Greece</option>
//                 <option value="Greenland">Greenland</option>
//                 <option value="Grenada">Grenada</option>
//                 <option value="Guadeloupe">Guadeloupe</option>
//                 <option value="Guam">Guam</option>
//                 <option value="Guatemala">Guatemala</option>
//                 <option value="Guernsey">Guernsey</option>
//                 <option value="Guinea">Guinea</option>
//                 <option value="Guinea-bissau">Guinea-bissau</option>
//                 <option value="Guyana">Guyana</option>
//                 <option value="Haiti">Haiti</option>
//                 <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
//                 <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
//                 <option value="Honduras">Honduras</option>
//                 <option value="Hong Kong">Hong Kong</option>
//                 <option value="Hungary">Hungary</option>
//                 <option value="Iceland">Iceland</option>
//                 <option value="India">India</option>
//                 <option value="Indonesia">Indonesia</option>
//                 <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
//                 <option value="Iraq">Iraq</option>
//                 <option value="Ireland">Ireland</option>
//                 <option value="Isle of Man">Isle of Man</option>
//                 <option value="Israel">Israel</option>
//                 <option value="Italy">Italy</option>
//                 <option value="Jamaica">Jamaica</option>
//                 <option value="Japan">Japan</option>
//                 <option value="Jersey">Jersey</option>
//                 <option value="Jordan">Jordan</option>
//                 <option value="Kazakhstan">Kazakhstan</option>
//                 <option value="Kenya">Kenya</option>
//                 <option value="Kiribati">Kiribati</option>
//                 <option value="Korea, Democratic People&apos;s Republic of">Korea, Democratic People&apos;s Republic of</option>
//                 <option value="Korea, Republic of">Korea, Republic of</option>
//                 <option value="Kuwait">Kuwait</option>
//                 <option value="Kyrgyzstan">Kyrgyzstan</option>
//                 <option value="Lao People&apos;s Democratic Republic">Lao People&apos;s Democratic Republic</option>
//                 <option value="Latvia">Latvia</option>
//                 <option value="Lebanon">Lebanon</option>
//                 <option value="Lesotho">Lesotho</option>
//                 <option value="Liberia">Liberia</option>
//                 <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
//                 <option value="Liechtenstein">Liechtenstein</option>
//                 <option value="Lithuania">Lithuania</option>
//                 <option value="Luxembourg">Luxembourg</option>
//                 <option value="Macao">Macao</option>
//                 <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
//                 <option value="Madagascar">Madagascar</option>
//                 <option value="Malawi">Malawi</option>
//                 <option value="Malaysia">Malaysia</option>
//                 <option value="Maldives">Maldives</option>
//                 <option value="Mali">Mali</option>
//                 <option value="Malta">Malta</option>
//                 <option value="Marshall Islands">Marshall Islands</option>
//                 <option value="Martinique">Martinique</option>
//                 <option value="Mauritania">Mauritania</option>
//                 <option value="Mauritius">Mauritius</option>
//                 <option value="Mayotte">Mayotte</option>
//                 <option value="Mexico">Mexico</option>
//                 <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
//                 <option value="Moldova, Republic of">Moldova, Republic of</option>
//                 <option value="Monaco">Monaco</option>
//                 <option value="Mongolia">Mongolia</option>
//                 <option value="Montenegro">Montenegro</option>
//                 <option value="Montserrat">Montserrat</option>
//                 <option value="Morocco">Morocco</option>
//                 <option value="Mozambique">Mozambique</option>
//                 <option value="Myanmar">Myanmar</option>
//                 <option value="Namibia">Namibia</option>
//                 <option value="Nauru">Nauru</option>
//                 <option value="Nepal">Nepal</option>
//                 <option value="Netherlands">Netherlands</option>
//                 <option value="Netherlands Antilles">Netherlands Antilles</option>
//                 <option value="New Caledonia">New Caledonia</option>
//                 <option value="New Zealand">New Zealand</option>
//                 <option value="Nicaragua">Nicaragua</option>
//                 <option value="Niger">Niger</option>
//                 <option value="Nigeria">Nigeria</option>
//                 <option value="Niue">Niue</option>
//                 <option value="Norfolk Island">Norfolk Island</option>
//                 <option value="Northern Mariana Islands">Northern Mariana Islands</option>
//                 <option value="Norway">Norway</option>
//                 <option value="Oman">Oman</option>
//                 <option value="Pakistan">Pakistan</option>
//                 <option value="Palau">Palau</option>
//                 <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
//                 <option value="Panama">Panama</option>
//                 <option value="Papua New Guinea">Papua New Guinea</option>
//                 <option value="Paraguay">Paraguay</option>
//                 <option value="Peru">Peru</option>
//                 <option value="Philippines">Philippines</option>
//                 <option value="Pitcairn">Pitcairn</option>
//                 <option value="Poland">Poland</option>
//                 <option value="Portugal">Portugal</option>
//                 <option value="Puerto Rico">Puerto Rico</option>
//                 <option value="Qatar">Qatar</option>
//                 <option value="Reunion">Reunion</option>
//                 <option value="Romania">Romania</option>
//                 <option value="Russian Federation">Russian Federation</option>
//                 <option value="Rwanda">Rwanda</option>
//                 <option value="Saint Helena">Saint Helena</option>
//                 <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
//                 <option value="Saint Lucia">Saint Lucia</option>
//                 <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
//                 <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
//                 <option value="Samoa">Samoa</option>
//                 <option value="San Marino">San Marino</option>
//                 <option value="Sao Tome and Principe">Sao Tome and Principe</option>
//                 <option value="Saudi Arabia">Saudi Arabia</option>
//                 <option value="Senegal">Senegal</option>
//                 <option value="Serbia">Serbia</option>
//                 <option value="Seychelles">Seychelles</option>
//                 <option value="Sierra Leone">Sierra Leone</option>
//                 <option value="Singapore">Singapore</option>
//                 <option value="Slovakia">Slovakia</option>
//                 <option value="Slovenia">Slovenia</option>
//                 <option value="Solomon Islands">Solomon Islands</option>
//                 <option value="Somalia">Somalia</option>
//                 <option value="South Africa">South Africa</option>
//                 <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
//                 <option value="Spain">Spain</option>
//                 <option value="Sri Lanka">Sri Lanka</option>
//                 <option value="Sudan">Sudan</option>
//                 <option value="Suriname">Suriname</option>
//                 <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
//                 <option value="Swaziland">Swaziland</option>
//                 <option value="Sweden">Sweden</option>
//                 <option value="Switzerland">Switzerland</option>
//                 <option value="Syrian Arab Republic">Syrian Arab Republic</option>
//                 <option value="Taiwan">Taiwan</option>
//                 <option value="Tajikistan">Tajikistan</option>
//                 <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
//                 <option value="Thailand">Thailand</option>
//                 <option value="Timor-leste">Timor-leste</option>
//                 <option value="Togo">Togo</option>
//                 <option value="Tokelau">Tokelau</option>
//                 <option value="Tonga">Tonga</option>
//                 <option value="Trinidad and Tobago">Trinidad and Tobago</option>
//                 <option value="Tunisia">Tunisia</option>
//                 <option value="Turkey">Turkey</option>
//                 <option value="Turkmenistan">Turkmenistan</option>
//                 <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
//                 <option value="Tuvalu">Tuvalu</option>
//                 <option value="Uganda">Uganda</option>
//                 <option value="Ukraine">Ukraine</option>
//                 <option value="United Arab Emirates">United Arab Emirates</option>
//                 <option value="United Kingdom">United Kingdom</option>
//                 <option value="United States">United States</option>
//                 <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
//                 <option value="Uruguay">Uruguay</option>
//                 <option value="Uzbekistan">Uzbekistan</option>
//                 <option value="Vanuatu">Vanuatu</option>
//                 <option value="Venezuela">Venezuela</option>
//                 <option value="Viet Nam">Viet Nam</option>
//                 <option value="Virgin Islands, British">Virgin Islands, British</option>
//                 <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
//                 <option value="Wallis and Futuna">Wallis and Futuna</option>
//                 <option value="Western Sahara">Western Sahara</option>
//                 <option value="Yemen">Yemen</option>
//                 <option value="Zambia">Zambia</option>
//                 <option value="Zimbabwe">Zimbabwe</option>
//             </select>
//     </div>
 
//   </div>
//   <button
//   disabled={isSubmitting}
//   type="submit" className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center cardy text-white">Submit</button>
// </form>

// <br />
// <br />
// <br />
//      </div>
        
//     )
// }