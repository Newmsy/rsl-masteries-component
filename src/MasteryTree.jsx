import React from "react";

const HoverElement = ({ styles, text }) => {
  return (
    <div
      style={{
        ...styles,
      }}
      className="masteries-popover"
    >
      <div class="popover-text msb-title-row">{text}</div>
    </div>
  );
};

export const MasteryTree = () => {
  const [hoverElement, setHoverElement] = React.useState(null);
  const popOverRef = React.useRef(null);
  const onHover = (e) => {
    setHoverElement(e.target);
  };

  const hoverAnchorStyles = React.useMemo(() => {
    const target = hoverElement;
    console.log(popOverRef.current);

    if (!target || !popOverRef.current) return;
    const targetRect = target.getBoundingClientRect();
    const top = targetRect.top + targetRect.height + 5;
    const left = Math.max(targetRect.left + targetRect.width / 2 - 120, 0);
    return { top: `${top}px`, left: `${left}px` };
  }, [hoverElement]);

  return (
    <div id="pvp-1" class="msb-container msb-accordion-content msb-active">
      <div ref={popOverRef}>
        <HoverElement styles={{ ...hoverAnchorStyles, display: !!hoverElement ? "" : "none" }} text={hoverElement?.title} />
      </div>
      <div class="msb-offense msb-section">
        <div class="msb-title-row">Offense</div>
        <div class="msb-separator"></div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Blade Disciple - ATK +75"
              alt="blade-disciple"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/blade-disciple.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Deadly Precision - C. RATE +5%"
              alt="deadly-precision"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/deadly-precision.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Heart of Glory - Increases damage inflicted by 5% when attacking with full HP"
              alt="heart-of-glory"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/heart-of-glory.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Keen Strike - C. DMG +10%"
              alt="keen-strike"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/keen-strike.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Shield Breaker - Increases damage inflicted to targets under [Shield], buffs by 25%"
              alt="shield-breaker"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/shield-breaker.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Grim Resolve - Increases damage inflicted by 5% when attacking with 50% HP or less"
              alt="grim-resolve"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/grim-resolve.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Single Out - Increases damage inflicted to targets with less than 40% HP by 8%"
              alt="single-out"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/single-out.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Life Drinker - Heals by 5% of damage inflicted when attacking with 50% HP or less"
              alt="life-drinker"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/life-drinker.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Whirlwind of Death - Increases SPD by 6 for each enemy killed by this Champion. Stacks across each round in a battle, up to 18 SPD"
              alt="whirlwind-of-death"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/whirlwind-of-death.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Ruthless Ambush - Increases damage inflicted by 8% for the first hit on each enemy"
              alt="ruthless-ambush"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/ruthless-ambush.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Bring It Down - Increases damage inflicted by 6% when attacking targets with higher MAX HP"
              alt="bring-it-down"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/bring-it-down.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Wrath of the Slain - Increases damage inflicted by 5% for each dead ally. Stacks up to 10%"
              alt="wrath-of-the-slain"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/wrath-of-the-slain.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Cycle of Violence - Has a 30% chance of decreasing the cooldown of a random Skill by 1 turn if the damage inflicted by a Skill exceeds 30% of the target's MAX HP. Occurs once per turn"
              alt="cycle-of-violence"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/cycle-of-violence.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Opportunist - Increases damage inflicted to targets with [Stun], [Sleep], [Fear], [True Fear], [Freeze], [Petrification], debuffs by 12%."
              alt="opportunist"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/opportunist.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Methodical - Increases the damage inflicted by this Champion's default Skill by 2% each time it is used during battle. Stacks across each round in a battle, up to 10%"
              alt="methodical"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/methodical.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Kill Streak - Increases damage inflicted by 6% in the Arena and 3% in all other locations for each enemy killed by this Champion in battle. Stacks across each round in a battle, up to 12%"
              alt="kill-streak"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/kill-streak.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Blood Shield - Places a [Shield], buff on this Champion for 1 turn when this Champion kills an enemy. The value of the [Shield], is equal to 15% of this Champion's MAX HP. Occurs once per turn"
              alt="blood-shield"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/blood-shield.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Stoked To Fury - Increases damage inflicted by 4% for each debuff on this Champion. Stacks up to 12%"
              alt="stoked-to-fury"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/stoked-to-fury.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Warmaster - Has a 60% chance of inflicting bonus damage when attacking. Bonus damage is equal to 10% of the target Champion's MAX HP or 4% of the target's MAX HP when attacking Bosses. Bonus damage can only occur once per Skill and does not count as an extra hit."
              alt="warmaster"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/warmaster.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Helmsmasher - Has a 50% chance of ignoring 25% of the target's DEF. For Skills that ignore DEF, this 25% is in addition to the amount ignored by the Skill."
              alt="helmsmasher"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/helmsmasher.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Giant Slayer - Has a 30% chance of inflicting bonus damage when attacking. Bonus damage is equal to 7.5% of the target Champion's MAX HP or 3% of the target's MAX HP when attacking Bosses. Bonus damage can occur on each hit of a Skill, but does not count as an extra hit."
              alt="giant-slayer"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/giant-slayer.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Flawless Execution - C. DMG +20%"
              alt="flawless-execution"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/flawless-execution.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
      </div>
      <div class="msb-defense msb-section">
        <div class="msb-title-row">Defense</div>
        <div class="msb-separator"></div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image">
            <img
              title="Tough Skin - DEF +75"
              alt="tough-skin"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/tough-skin.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Defiant - RES +10"
              alt="defiant"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/defiant.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image">
            <img
              title="Blastproof - Decreases damage received from AoE attacks by 5%"
              alt="blastproof"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/blastproof.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Rejuvenation - Increases the amount of healing and the value of [Shield], buffs this Champion receives by 5%"
              alt="rejuvenation"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/rejuvenation.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Decreases the damage received by 10% if this Champion has [Stun], [Sleep], [Fear], [True Fear], [Freeze], [Petrification] debuffs"
              alt="might-endurance"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/might-endurance.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Improved Parry - Decreases the damage received by this Champion by 8% when this Champion is hit with a critical hit"
              alt="improved-parry"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/improved-parry.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Shadow Heal - Heals this Champion by 6% of their MAX HP each time an enemy is healed. Occurs once per turn."
              alt="shadow-heal"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/shadow-heal.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Resurgent - Has a 50% chance to remove 1 random debuff from this Champion when they lose 25% of their MAX HP or more from a single enemy Skill"
              alt="resurgent"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/resurgent.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Bloodthirst - Heals this Champion by 10% of their MAX HP when they kill an enemy target. Cooldown: 1 turn"
              alt="bloodthirst"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/bloodthirst.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Wisdom of Battle - Has a 30% chance of placing a [Block Debuffs], buff on this Champion for 1 turn when [Stun], [Sleep], [Fear], [True Fear], [Freeze], [Petrification], debuffs expire on this Champion."
              alt="wisdom-of-battle"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/wisdom-of-battle.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Solidarity - Increases Ally RESIST by 5 for each buff placed on them by this Champion"
              alt="solidarity"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/solidarity.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Delay Death - Reduces the damage this Champion receives from a specific enemy by 0.75% with each hit taken from that enemy. Damage reduction stacks up to 6% for each enemy"
              alt="delay-death"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/delay-death.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Harvest Despair - Has a 60% chance of placing a [Leech], debuff for 1 turn when placing [Stun], [Sleep], [Fear], [True Fear], [Freeze], [Petrification], debuffs."
              alt="harvest-despair"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/harvest-despair.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Stubbornness - Increases RESIST by 10 for each debuff on this Champion. Stacks up to 30"
              alt="stubbornness"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/stubbornness.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Selfless Defender - Decreases the damage an ally receives from the first enemy hit in each round by 20%. This Champion will receive that damage instead"
              alt="selfless-defender"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/selfless-defender.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Cycle of Revenge - Has a 50% chance of increasing the Turn Meter by 15% when an ally is attacked with a critical hit. Will only increase the Turn Meter once if an ally receives multiple critical hits from a single Skill"
              alt="cycle-of-revenge"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/cycle-of-revenge.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Retribution - Has a 50% chance to counterattack when this Champion loses 25% of their MAX HP or more from a single enemy Skill"
              alt="retribution"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/retribution.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Deterrence - Has a 20% chance to counterattack an enemy when they apply a [Stun], [Sleep], [Fear], [True Fear], [Freeze], [Petrification], debuff on an ally. Cooldown: 1 turn"
              alt="deterrence"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/deterrence.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Iron Skin - DEF +200"
              alt="iron-skin"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/iron-skin.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Bulwark - Decreases the damage all allies receive by 5%. This Champion will receive that damage instead"
              alt="bulwark"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/bulwark.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Fearsome Presence - Increases the chances of placing a [Stun], [Sleep], [Freeze], [Fear], [True Fear], or [Provoke], debuff from Skills or Artifacts by 5%"
              alt="fearsome-presence"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/fearsome-presence.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Unshakeable - RESIST +50"
              alt="unshakeable"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/unshakeable.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
      </div>
      <div class="msb-support msb-section">
        <div class="msb-title-row">Support</div>
        <div class="msb-separator"></div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Steadfast - MAX HP +810"
              alt="steadfast"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/steadfast.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Pinpoint Accuracy - ACC +10"
              alt="pinpoint-accuracy"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/pinpoint-accuracy.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Lay On Hands - Increases the value of heals this Champion casts by 5%"
              alt="lay-on-hands"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/lay-on-hands.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Shieldbearer - Increases the value of [Shield], buffs this Champion casts by 5%"
              alt="shieldbearer"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/shieldbearer.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Exalt in Death - Heals this Champion by 10% of their MAX HP the first time an enemy is killed in each round"
              alt="exalt-in-death"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/exalt-in-death.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Charged Focus - Increases ACC by 20 when this Champion has no Skills on cooldown"
              alt="charged-focus"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/charged-focus.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Healing Savior - Increases the amount of healing and the value of [Shield], buffs placed by this Champion by 10% if the target ally has 40% HP or less"
              alt="healing-savior"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/healing-savior.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Rapid Response - Has a 30% chance of increasing the Turn Meter by 10% when a buff cast by this Champion is removed or expires"
              alt="rapid-response"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/rapid-response.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Swarm Smiter - Increases ACC by 4 for each enemy alive. Stacks up to 16"
              alt="swarm-smiter"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/swarm-smiter.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Arcane Celerity - Has a 30% chance of increasing the Turn Meter by 10% when a debuff cast by this Champion is removed or expires"
              alt="arcane-celerity"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/arcane-celerity.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Merciful Aid - Increases the amount of healing and the value of [Shield], buffs placed by this Champion by 15% if the target ally has [Stun], [Sleep], [Fear], [True Fear], or [Freeze], debuffs"
              alt="merciful-aid"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/merciful-aid.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Cycle of Magic - Has a 5% chance of decreasing the cooldown of a random Skill by 1 turn at the start of every turn"
              alt="cycle-of-magic"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/cycle-of-magic.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Lore of Steel - Increases the Base Stat Set Bonuses of all Artifact Sets that increase Base Stats by 15%. This increase is multiplicative, not additive."
              alt="lore-of-steel"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/lore-of-steel.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Evil Eye - Decreases the target's Turn Meter when this Champion hits them with the default Skill for the first time. Decreases the Turn Meter by 20% with single-target Skills and by 5% with AoE Skills. Occurs once per target."
              alt="evil-eye"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/evil-eye.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image">
            <img
              title="Lasting Gifts - Has a 30% chance to extend the duration of any buff cast by this Champion by 1 turn.

It will not extend [Block Damage], [Unkillable], or [Revive on Death], buffs."
              alt="lasting-gifts"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/lasting-gifts.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Spirit Haste - Increases SPD by 8 for each dead ally. Stacks up to 24"
              alt="spirit-haste"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/spirit-haste.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Sniper - Increases the chances of placing any debuff from Skills or Artifacts by 5%.

It will not increase the chances of placing [Stun], [Sleep], [Freeze], [Fear], [True Fear], [Provoke], or [Petrification], debuffs."
              alt="sniper"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/sniper.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Master Hexer - Has a 30% chance to extend the duration of any debuff cast by this Champion by 1 turn. It will not extend [Stun], [Sleep], [Freeze], [Provoke], [Fear], [True Fear], [Bomb], or [Petrification], debuffs."
              alt="master-hexer"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/master-hexer.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
        <div class="msb-mastery-row">
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Elixir of Life - MAX HP +3,000"
              alt="elixir-of-life"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/elixir-of-life.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image">
            <img
              title="Timely Intervention - Increases this Champion's Turn Meter by 20% whenever an ally hero drops below 25% HP"
              alt="timely-intervention"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/timely-intervention.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Oppressor - Increases the Turn Meter fill rate by 2.5% for each active debuff cast by this Champion. Stacks up to 10%."
              alt="oppressor"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/oppressor.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
          <div class="msb-mastery-image rslm-disabled">
            <img
              title="Eagle-Eye - ACC +50"
              alt="eagle-eye"
              class="ignore-lazy"
              src="https://hellhades.com/wp-content/plugins/rsl-masteries/assets/images/masteries/eagle-eye.png"
              onMouseEnter={onHover}
              onMouseLeave={() => setHoverElement(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
