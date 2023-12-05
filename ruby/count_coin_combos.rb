def count_coin_combos(value, denominations)
  combos = {} 
  value.times do |v|
    curVal = v + 1
    denominations.each do |d|
      puts ('curVal: ' + curVal.to_s)
      puts ('d: ' + d.to_s)
      if (d > curVal)
        next
      end
      if !combos[curVal]
        combos[curVal] = []
      end

      remainder = curVal - d
        
      remainder_combos = combos[remainder] || []

      if remainder == 0
        if remainder_combos.length == 0 && combos[curVal].length == 0
          combos[curVal] = [[d]]
        else
          combos[curVal] << [d]
        end
        next
      else

        if (remainder >= d)
          new_combo = remainder_combos.map do |c| 
            Array.new(c).push(d)
          end 
          puts 'new_combo'
          puts new_combo.to_s
          combos[curVal].concat(new_combo)
          puts 'after'
          puts combos.to_s
        end
      end
    end
  end
  combos
end

#puts count_coin_combos(4, [1,2,3])
puts count_coin_combos(4, [1,2])