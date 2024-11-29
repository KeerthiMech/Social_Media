import * as Yup from "yup";
const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

 export const Formvalidator=Yup.object().shape({
    name : Yup.string().required('required'),
    userid :Yup.mixed().required('Required'),
    username :Yup.mixed().required('Required'),
    password : Yup.string().required('Please enter a password')
    .min(8, 'Password too short')
    .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(/^(?=.*[!@#%&])/,'Must contain at least one special character'),
    confirmpassword : Yup.string(),
    profile_pic : Yup
    .mixed()
    .required('Required')
    .test("is-valid-type", "Not a valid image type",
      value => isValidFileType(value && value.name.toLowerCase(), "image"))
    .test("is-valid-size", "Max allowed size is 100KB",
      value => value && value.size <= MAX_FILE_SIZE),
    age : Yup.number().min(13),
    policy_acceptance : Yup.boolean().required()
 })