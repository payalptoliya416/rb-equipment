import CTA from "@/components/common/CTA"
import InventoryHero from "@/components/inventory/InventoryHero"
import InvetoryFilter from "@/components/inventory/InvetoryFilter"

function Inventory() {
  return (
    <>
      <InventoryHero/>
      <InvetoryFilter/>
      <CTA/>
    </>
  )
}

export default Inventory
