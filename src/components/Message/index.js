import React from 'react';
import { useSelector } from 'react-redux'

export default function Message(){
    const isShow = useSelector(state => state.layout.showMessage)
    return (
        <> 
          {isShow && (
            <div className="container">
                <div className="alert alert-success mt-3" role="alert">
                    <span>Cadastro realizado com sucesso !</span>
                </div>
            </div>
          )}
        </>
    )
}