import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data);
    
}

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useState } from 'react';

// // Data structure
// interface ContactData {
//   name: string;
//   email: string;
//   phone: string;
// }

// // 1. Native fetch execution function
// const sendContactData = async (payload: ContactData) => {
//   const response = await fetch('/api/contacts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   });

//   if (!response.ok) {
//     throw new Error(`Server returned status: ${response.status}`);
//   }

//   return response.json();
// };

// export function ContactForm() {
//   const queryClient = useQueryClient();
//   const [formData, setFormData] = useState<ContactData>({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   // 2. Pure TanStack Query mutation hook
//   const { mutate, isPending, isError, isSuccess, error } = useMutation({
//     mutationFn: sendContactData,
//     onSuccess: () => {
//       // Refresh cached contact lists automatically upon success
//       queryClient.invalidateQueries({ queryKey: ['contacts'] });
//       setFormData({ name: '', email: '', phone: '' });
//     },
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     mutate(formData);
//   };

//   ;
// }