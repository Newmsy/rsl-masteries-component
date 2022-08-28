import React from "react";

function factorial(x) {
  if (x === 0) return 1;
  for (let i = x - 1; i >= 1; i--) {
    x = x * i;
  }

  return x;
}

const CalculateShards = (lambda, k) => {
  return (Math.E ** -lambda * lambda ** k) / factorial(k);
};

const GetShardReturns = (lambda) => {
  const output = [];
  for (let i = 0; i < 50; i++) {
    const chance = CalculateShards(lambda, i);
    if (chance > 0.001) output.push({ i, chance });
  }
  return output;
};

export const ShardCalculator = () => {
  const [shardNumberA, setShardNumberA] = React.useState(0);
  const [shardNumberV, setShardNumberV] = React.useState(0);
  const [shardNumberS, setShardNumberS] = React.useState(0);
  const [shardChanceA, setShardChanceA] = React.useState(false);
  const [shardChanceV, setShardChanceV] = React.useState(false);
  const [shardChanceS, setShardChanceS] = React.useState(false);

  const ShardReturnsLeg = React.useMemo(() => {
    const lambdaSum =
      shardNumberA * 0.005 * (shardChanceA ? 2 : 1) +
      shardNumberV * 0.005 * (shardChanceV ? 2 : 1) +
      shardNumberS * 0.06 * (shardChanceS ? 2 : 1);
    return GetShardReturns(lambdaSum);
  }, [shardChanceA, shardChanceS, shardChanceV, shardNumberA, shardNumberS, shardNumberV]);

  const ShardReturnsEpic = React.useMemo(() => {
    const lambdaSum =
      shardNumberA * 0.08 * (shardChanceA ? 2 : 1) +
      shardNumberV * 0.08 * (shardChanceV ? 2 : 1) +
      shardNumberS * (shardChanceS ? 0.88 : 0.94);
    return GetShardReturns(lambdaSum);
  }, [shardChanceA, shardChanceS, shardChanceV, shardNumberA, shardNumberS, shardNumberV]);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: 400 }}>
      <div style={{ display: "flex", flexDirection: "column", width: 200, marginLeft: 100 }}>
        <label>Ancients</label>
        <div>
          <label>2x</label>
          <input type="checkbox" value={shardChanceA} onChange={(e) => setShardChanceA(e.target.checked)}></input>
          <input type="number" onChange={(e) => setShardNumberA(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))}></input>
        </div>
        <label>Voids</label>
        <div>
          <label>2x</label>
          <input type="checkbox" value={shardChanceV} onChange={(e) => setShardChanceV(e.target.checked)}></input>
          <input type="number" onChange={(e) => setShardNumberV(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))}></input>
        </div>
        <label>Sacreds</label>
        <div>
          <label>2x</label>
          <input type="checkbox" value={shardChanceS} onChange={(e) => setShardChanceS(e.target.checked)}></input>
          <input type="number" onChange={(e) => setShardNumberS(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))}></input>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
          <div>Legendaries Expected:</div>
          {ShardReturnsLeg.reduce((prev, curr) => prev + curr.i * curr.chance, 0)
            .toString()
            .substring(0, 4)}
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
          <div>Epics Expected:</div>
          {ShardReturnsEpic.reduce((prev, curr) => prev + curr.i * curr.chance, 0)
            .toString()
            .substring(0, 4)}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
          <div>Legendary chances:</div>
          {ShardReturnsLeg.map((item) => {
            return (
              <div>
                {item.i} - {(item.chance * 100).toString().substring(0, 4)}%
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
          <div>Epic chances:</div>
          {ShardReturnsEpic.map((item) => {
            console.log(item.i);
            console.log(shardNumberA + shardNumberV + shardNumberS);
            if (item.i > shardNumberA + shardNumberV + shardNumberS) return <div></div>;
            return (
              <div>
                {item.i} - {(item.chance * 100).toString().substring(0, 4)}%
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
