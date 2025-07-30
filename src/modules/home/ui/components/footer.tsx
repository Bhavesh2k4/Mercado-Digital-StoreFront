import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className='flex border-t justify-between font-medium p-4'>
        <div className='flex items-center gap-2'>
            <p>
                © {year} Mercado
            </p>
        </div>
    </footer>
  )
}

export default Footer