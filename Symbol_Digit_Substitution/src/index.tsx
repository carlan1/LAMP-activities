/**
 * @file   index.tsx
 * @brief  Intial component for the react app
 * @date   Feb , 2020
 * @author ZCO Engineer
 * @copyright (c) 2020, ZCO
 */
import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import './index.css'
import "material-icons"
import SymbolDigitSubstitution from "./components/SymbolDigitSubstitution"

ReactDOM.render(
  <AppContainer>
    <SymbolDigitSubstitution />
  </AppContainer>,  
  document.getElementById('root') as HTMLElement
);
