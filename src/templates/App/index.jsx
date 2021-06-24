import './style.css';
// import { UseState } from './UseState';
// import { UseEffect } from './UseEffect';
// import { UseCallback } from './UseCallback';
// import { UseMemoA } from './UseMemoA';
// import { UseRef } from './UseRef';
// import { UseContext } from './UseContext';
// import { UseReducer } from './UseReducer';
// import { UseReducerUseContext } from './hooks/UseReducerUseContext';
// import { CreateHooks } from './hooks/CreateHooks';
import { OrganizacaoHooks } from '../../hooks/OrganizacaoHooks';

function App() {
  return (
    <div className="App">
      <OrganizacaoHooks />
    </div>
  );
}

export { App };

// npx eslint src/**/*js --fix
// npx eslint src/**/*jsx --fix
