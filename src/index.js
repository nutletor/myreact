// console.log("hello world")

import React from 'react';
import { createRoot } from 'react-dom/client';

import './01-base/01-class-component'
import App from './01-base/05-event-binding'

const container = document.getElementById('root')

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>)






