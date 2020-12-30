import React, { useState } from 'react';

const getDataAndLatte = (param: any) => param || 'no param';

function* generate() {
  const results = yield getDataAndLatte(undefined);
  const newResults = yield getDataAndLatte(results);
}

const generator = generate();

const Index: React.FC = () => {
  const [result, setResult] = useState<any>({ value: '', done: false });
  return (
    <>
      <h1>EX1</h1>
      <button
        type="button"
        onClick={() => {
          setResult(generator.next());
        }}
      >
        next
      </button>
      <span>{`${result.value} ${result.done}`}</span>
    </>
  );
};

export default Index;
