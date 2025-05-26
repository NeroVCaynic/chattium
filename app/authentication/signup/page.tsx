'use client';

import React from 'react';
import { signup as sign } from '@/utils/auth';

export default function signup() {
    return (
        <main
        id='sinup-page'
        className=''
        >
            <fieldset className="fieldset rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Sign up</legend>
                <form>
                    <label htmlFor="email">Email:</label>
                    <label className="floating-label" htmlFor="email">
                        <span>Your Email</span>
                        <input 
                        id="email" 
                        name="email" 
                        type="email"
                        placeholder="mail@site.com" 
                        className="input input-md" 
                        required
                        />
                    </label>
                    <input id="email" name="email" type="email" required />
                    <label htmlFor="password">Password:</label>
                    <input id="password" name="password" type="password" required />
                    <button className="btn btn-neutral mt-4" formAction={sign}>Submit</button>
                </form>
            </fieldset>
        </main>
    );
};