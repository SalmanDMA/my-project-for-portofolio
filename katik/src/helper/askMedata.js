export const askMeData = [
 {
  id: 1,
  name: 'email',
  placeholder: 'example@gmail.com',
  validation: {
   required: {
    value: true,
    message: 'Email is required',
   },
   pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address',
   },
  },
 },
 {
  id: 2,
  name: 'name',
  placeholder: 'Enter name...',
  validation: {
   required: {
    value: true,
    message: 'Name is required',
   },
   minLength: {
    value: 2,
    message: 'Name must be at least 2 characters',
   },
  },
 },
 {
  id: 3,
  name: 'subject',
  placeholder: 'Enter subject...',
  validation: {
   required: {
    value: true,
    message: 'Subject is required',
   },
   minLength: {
    value: 5,
    message: 'Subject must be at least 5 characters',
   },
  },
 },
 {
  id: 4,
  name: 'message',
  placeholder: 'Enter message...',
  type: 'textarea',
  validation: {
   required: {
    value: true,
    message: 'Message is required',
   },
   minLength: {
    value: 10,
    message: 'Message must be at least 10 characters',
   },
   maxLength: {
    value: 200,
    message: 'Message must be at most 200 characters',
   },
  },
 },
];
