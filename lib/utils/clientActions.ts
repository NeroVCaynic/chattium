'use client';

import supabaseClient from '@/utils/client';
import { validateRedirect } from './serverActions';

export async function login(formData: FormData) {
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };
    
    const { error } = await supabaseClient.auth.signInWithPassword(data);
    
    if (error) {
        console.log(error);
    }
    
    validateRedirect('/');
};

export async function logout() {
    const { error } = await supabaseClient.auth.signOut();
    
    if (error) {
        console.log(error);
    }
    
    validateRedirect('/authentication/login');
}